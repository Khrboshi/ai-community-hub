import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CommunityChat from '../components/CommunityChat'
export default function Community(){ return (<><Head><title>Community — AI Community Hub</title></Head><Header /><main className='container my-8'><h1 className='text-3xl font-bold mb-4'>Community</h1><p className='mb-4'>Join the semi-public chat room below. Visitors can read openly; posting is controlled for members.</p><CommunityChat /></main><Footer /></>) }
