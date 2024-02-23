import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Account from './components/Account';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import Greeting from './components/Greeting';
import MainInfo from './components/MainInfo';
import Map from './components/Map';
import Notice from './components/Notice';
import Text from './components/Text';
import Transport from './components/Transport';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>유환 ❤ 진솔</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
            </Head>
            <div className="container">
                <div className="text">THE WEDDING DAY</div>
                <img src={`../../picture02.jpg`} className="picture" />
                <MainInfo />
                <Text />
                <Greeting />
                <Calendar />
                <Map />
                <Transport />
                <Account />
                <Contact />
                <Gallery />
                <Notice />
            </div>
        </>
    );
}
