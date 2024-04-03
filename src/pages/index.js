import Head from 'next/head';
import { Inter } from 'next/font/google';

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
import KakaoMap from './components/KakaoMap';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>👰🤵 진솔&유환, 결혼합니다</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
                <meta property="og:title" content="유환❤진솔" />
                <meta property="og:image" content="../../picture01.jpg" />
                <meta property="og:url" content="https://wedding-invitation-seven-omega.vercel.app/" />
                <meta property="og:description" content="유환과 진솔의 결혼식에 초대합니다" />
            </Head>
            <div className="container">
                <div className="text">THE WEDDING DAY</div>
                <img src={`../../picture02.jpg`} className="picture" />
                <MainInfo />
                <Text />
                <Greeting />
                <Calendar />
                <Map />
                <KakaoMap />
                <Transport />
                <Contact />
                <Account />
                <Gallery />
                <div className="divide-line"></div>
                <Notice />
                <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                    crossOrigin="anonymous"
                ></script>
            </div>
        </>
    );
}
