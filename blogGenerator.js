/**
 * Blog generator supports OPENAI_API_KEY first, then HF_TOKEN fallback.
 * Usage: node scripts/blogGenerator.js "Title" "Prompt"
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const args = process.argv.slice(2);
const title = args[0] || 'AI Update';
const prompt = args[1] || 'Write a short friendly AI news update for the AI Community Hub.';

const outDir = path.join(process.cwd(),'content','blogs');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});

function writeFile(slug, body){
  const filename = path.join(outDir, slug + '.md');
  const md = `---\ntitle: "${title}"\ndate: "${new Date().toISOString()}"\n---\n\n${body}\n`;
  fs.writeFileSync(filename, md, 'utf8');
  console.log('Wrote blog:', filename);
}

async function useOpenAI(){
  const key = process.env.OPENAI_API_KEY;
  if(!key) return false;
  console.log('Using OpenAI for generation...');
  const data = JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{role:'system', content:'You are a helpful assistant that writes short friendly AI community blog posts.'},{role:'user', content: prompt}],
    max_tokens: 700
  });
  const options = {
    hostname: 'api.openai.com',
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': `Bearer ${key}`
    }
  };
  const req = https.request(options, res => {
    let body = '';
    res.on('data', d=> body += d);
    res.on('end', ()=>{
      try{
        const j = JSON.parse(body);
        const text = j.choices?.[0]?.message?.content || 'No content generated.';
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
        writeFile(slug, text);
      }catch(e){
        console.error('OpenAI parse error', e);
        fallback();
      }
    });
  });
  req.on('error', e=>{ console.error('OpenAI request error', e); fallback(); });
  req.write(data);
  req.end();
  return true;
}

async function useHF(){
  const token = process.env.HF_TOKEN;
  if(!token) return false;
  console.log('Using Hugging Face Inference...');
  const data = JSON.stringify({ inputs: prompt, parameters:{ max_new_tokens: 300 } });
  const options = {
    hostname: 'api-inference.huggingface.co',
    path: '/models/gpt2',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };
  const req = https.request(options, res => {
    let body = '';
    res.on('data', d=> body += d);
    res.on('end', ()=>{
      try{
        const r = JSON.parse(body);
        const text = r[0]?.generated_text || r?.generated_text || 'No result';
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
        writeFile(slug, text);
      }catch(e){
        console.error('HF parse error', e);
        fallback();
      }
    });
  });
  req.on('error', e=>{ console.error(e); fallback(); });
  req.write(data);
  req.end();
  return true;
}

function fallback(){
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const body = `_This is a placeholder blog generated locally. Edit at /content/blogs/${slug}.md_\n\n${prompt}`;
  writeFile(slug, body);
}

(async ()=>{
  const didOpenAI = await useOpenAI();
  if(!didOpenAI){
    const didHF = await useHF();
    if(!didHF) fallback();
  }
})();
