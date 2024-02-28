'use client';

import { useEffect } from 'react';

export default function Navigation() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
        script.async = true;
        script.onload = () => {
            Kakao.init('a1ce4afbaf941a2fbe0dae37ff1df3da');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const startNavigation = () => {
            if (typeof kakao !== 'undefined') {
                kakao.maps.load(() => {
                    kakao.maps.Navigation.start({
                        name: '중림동 약현성당',
                        x: 126.96746105969463,
                        y: 37.5591271389194,
                        coordType: 'wgs84',
                    });
                });
            } else {
                console.error('Kakao SDK가 로드되지 않았습니다.');
            }
        };

        document.getElementById('start-navigation').addEventListener('click', startNavigation);

        return () => {
            document.getElementById('start-navigation').removeEventListener('click', startNavigation);
        };
    }, []);

    return (
        <div className="navi_container">
            <div className="navi_app">
                <a id="start-navigation" href="#">
                    <img src="https://developers.kakao.com/assets/img/about/buttons/navi/kakaonavi_btn_medium.png" alt="길 안내하기 버튼" />
                </a>
            </div>
        </div>
    );
}
