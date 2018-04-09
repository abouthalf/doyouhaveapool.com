import Link from 'next/link'
import Head from '../components/head'
import ReactMarkdown from 'react-markdown';

import about from '../texts/about.txt';


export default () => (
    <div className="about">
        <Head title="About Do you have a pool?" />
        <ReactMarkdown source={about} className='content' />
        <Link href="/">
            <a>back</a>
        </Link>
        <style global jsx>{`
            .about {
                font-family: 'Slabo 27px', serif;
                font-size: 1rem;
                margin: 2rem;
                color: #222;
            }
            h1, h2, h3 {
                font-family: 'Raleway', sans-serif;
            }

            a {
                color: #666;
                text-decoration: none;
            }

            @media screen and (min-width: 768px) {
                .about {
                    margin: 4rem 8rem;
                }
            }
        `}</style>
    </div>
)