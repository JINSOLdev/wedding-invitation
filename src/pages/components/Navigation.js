import React, { useEffect } from 'react';

export default function Navigation() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js';
        script.integrity = 'sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01';
        script.crossOrigin = 'anonymous';

        script.onload = () => {
            console.log('Kakao SDK가 로드되었습니다.');
        };

        script.onerror = () => {
            console.error('Kakao SDK를 로드하는 중에 오류가 발생했습니다.');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const startNavigation = () => {
        if (typeof kakao !== 'undefined') {
            kakao.maps.load(() => {
                kakao.maps.Navigation.start({
                    name: '서소문역사박물관 주차장',
                    x: 126.971956,
                    y: 37.565715,
                    coordType: 'wgs84',
                });
            });
        } else {
            console.error('Kakao SDK가 로드되지 않았습니다.');
        }
    };

    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault(); // 링크의 기본 동작 방지
            startNavigation();
        };

        document.getElementById('start-navigation').addEventListener('click', handleClick);

        return () => {
            document.getElementById('start-navigation').removeEventListener('click', handleClick);
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
