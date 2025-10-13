import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import fs from 'fs'
import path from 'path'
export async function getStaticProps(){ const dir=path.join(process.cwd(),'content','blogs'); let files=[]; try{files=fs.readdirSync(dir)}catch(e){files=[]} const posts=files.filter(f=>f.endsWith('.md')).map(f=>{const text=fs.readFileSync(path.join(dir,f),'utf8'); const title=(text.match(/title:\s*"(.+)"/)||[])[1]||f.replace('.md',''); const excerpt=text.split('\n').slice(3,6).join(' ').slice(0,150); return {title,excerpt,file:f}}); return {props:{posts}} }
export default function Blogs({posts}){ return (<><Head><title>Blogs — AI Community Hub</title></Head><Header /><main className='container my-8'><h1 className='text-3xl font-bold mb-6'>Blogs</h1><div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{posts.map((p,i)=><BlogCard key={i} title={p.title} excerpt={p.excerpt} />)}</div><p className='mt-6 text-sm'>Use <code>scripts/blogGenerator.js</code> or enable GitHub Actions to auto-create posts weekly.</p></main><Footer /></>) }
