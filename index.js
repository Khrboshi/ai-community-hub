import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'

export default function Home(){ const featured=[{title:'Weekly AI Roundup',excerpt:'Curated AI news and tools.'},{title:'How to build on LLMs',excerpt:'Beginner-friendly guide.'}]; return (<>
  <Head><title>AI Community Hub</title></Head>
  <Header />
  <main className='container mt-8'>
    <Hero />
    <section className='mt-10'>
      <h2 className='text-2xl font-semibold mb-4'>Featured Blogs</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>{featured.map((b,i)=><BlogCard key={i} {...b} />)}</div>
    </section>
    <section className='mt-12'>
      <h2 className='text-2xl font-semibold mb-4'>Welcome Video</h2>
      <div className='rounded-lg overflow-hidden glow'><video controls src='/assets/intro.mp4' style={{width:'100%'}} poster='/assets/icon-192.png'>Your browser does not support the video tag.</video></div>
    </section>
  </main>
  <Footer />
</>)
}
