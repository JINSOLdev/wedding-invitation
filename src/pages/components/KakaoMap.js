'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

if (typeof window !== 'undefined') {
    window.kakao = window.kakao || {};
}

export default function KakaoMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        const container = mapRef.current;
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=43782e8b922330ff3f4bb1637d038b59&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

            const map = new window.kakao.maps.Map(container, options);
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <div ref={mapRef} style={{ width: '90%', height: '400px', display: 'block', margin: '2rem', textAlign: 'center' }} />;
}
