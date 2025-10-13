import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ResourceCard from '../components/ResourceCard'
export default function Resources(){ const resources=[{title:'Hugging Face',desc:'Models and datasets',link:'https://huggingface.co'},{title:'Element Matrix',desc:'Open-source chat & collaboration',link:'https://element.io'},{title:'Vercel',desc:'Deploy Next.js for free',link:'https://vercel.com'}]; return (<><Head><title>Resources — AI Community Hub</title></Head><Header /><main className='container my-8'><h1 className='text-3xl font-bold mb-6'>Resources</h1><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{resources.map((r,i)=><ResourceCard key={i} {...r} />)}</div></main><Footer /></>) }
