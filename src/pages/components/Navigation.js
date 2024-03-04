'use client';

export default function Navigation() {
    return (
        <div className="navi-group">
            <div className="navi-naver">
                <a href="https://naver.me/FZWifjM8">
                    <img alt="naver-map" className="map-icon" id="naver-map" src="img/map/naver-map.png" height="70" width="70" />
                </a>
            </div>
            <div className="navi-kakao">
                <a href="https://kko.to/nPvPinmwNy">
                    <img alt="kakao-map" className="map-icon" id="kakao-map" src="public/kakao-map.jpg" height="70" width="70" />
                </a>
            </div>
            <div className="navi-google">
                <a href="https://maps.app.goo.gl/m4VQWU1C8PZ3bHix8">
                    <img alt="google-map" className="map-icon" id="google-map" src="img/map/google-map.png" height="70" width="70" />
                </a>
            </div>
        </div>
    );
}
