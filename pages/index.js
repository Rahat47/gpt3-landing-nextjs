import Head from 'next/head';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '../containers';
import { Brand, CTA, Navbar } from '../components';

export default function Home() {
    return (
        <div>
            <Head>
                <title>GPT Landing</title>
                <meta
                    name='description'
                    content='GPT landing page with next.js'
                />
                <link rel='icon' href='/logo.png' />
            </Head>

            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>

            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
}
