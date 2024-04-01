import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossOrigin="anonymous"
                ></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap" rel="stylesheet" crossOrigin="anonymous" />
            </Head>
            <body>
                <script
                    strategy="beforeInteractive"
                    src="{`//dapi.kakao.com/v2/maps/sdk.js?appkey=${43782e8b922330ff3f4bb1637d038b59}&libraries=services&autoload=false`}"
                ></script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
