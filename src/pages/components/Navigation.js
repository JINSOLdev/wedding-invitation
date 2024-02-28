'use client';

export default function Navigation() {
    return (
        <div className="navi-group">
            <div className="navi-naver">
                <a href="http://naver.me/GvkXFE6S">
                    <img alt="naver-map" className="map-icon" id="naver-map" src="img/map/naver-map.png" height="60" width="60" />
                </a>
            </div>
            <div className="navi-kakao">
                <a href="https://map.kakao.com/?itemId=26633765">
                    <img alt="kakao-map" className="map-icon" id="kakao-map" src="img/map/kakao-map.png" height="60" width="60" />
                </a>
            </div>
            <div className="navi-google">
                <a href="https://maps.app.goo.gl/z59tx6AuZZ48PhWVA">
                    <img alt="google-map" className="map-icon" id="google-map" src="img/map/google-map.png" height="60" width="60" />
                </a>
            </div>
        </div>
    );
}
