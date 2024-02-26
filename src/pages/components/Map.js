'use client';

import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: { lat: 37.559297, lng: 126.967708 },
            });

            // 원하는 장소 마커 표시하기
            const locations = [
                { place: '천주교 중림동 약현성당', lat: 37.55915, lng: 126.967484 },
                // { place: '서소문성지역사박물관 주차장', lat: 37.560979, lng: 126.969337 },
            ];

            for (let i = 0; i < locations.length; i++) {
                const marker = new window.google.maps.Marker({
                    map,
                    label: locations[i].place,
                    position: new window.google.maps.LatLng(locations[i].lat, locations[i].lng),
                });
            }
        };

        // Google Maps API 스크립트 동적으로 로드
        // 이걸 왜 이렇게 하는가? script를 이런식으로 추가안해도 next.js에서 Script 컴포넌트로 하면 될텐데?
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap; // initMap 함수를 전역에 할당하여 스크립트에서 접근 가능하도록 함
        document.body.appendChild(script);

        // 컴포넌트가 언마운트될 때 스크립트 제거
        return () => {
            document.body.removeChild(script);
            delete window.initMap;
        };
    }, []);

    return (
        <div className="map">
            <p style={{ margin: '3rem 0 3rem 0', fontWeight: 'bold' }}>장소</p>
            <p>천주교 중림동 약현성당</p>
            <div id="map" style={{ width: '90%', height: '500px' }} />
        </div>
    );
}
