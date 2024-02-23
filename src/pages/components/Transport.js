export default function Transport() {
    return (
        <div className="transport">
            <p style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>오시는 길</p>
            <div id="subway">
                <p>지하철</p>
                <p>2,5호선 충정로역 하차</p>
                <p>4번 출구 : 한국경제신문사 코너 우측 200m 이동(정문)</p>
                <p>5번 출구 : 300m 직진 후 중림파출소 맞은편 (후문)</p>
            </div>
            <div id="bus">
                <p>버스</p>
                <p>[한국경제신문사 앞] 7011, 7013A/B, 7017 </p>
                <p>[충정로 4번 출구] 1100, 1101, 1200, 1300, 1301, 1400, 1500, M6118, 172,472,603</p>
                <p>[충정로 2번 출구] 2500, 8601, M6117, 1002, 600, 602</p>
            </div>
            <div id="car">
                <p>주차장</p>
                <p>서소문성지역사박물관 공영주차장 </p>
                <p>(서울특별시 중구 칠패로 5)</p>
                <p style={{ fontSize: '1.2rem' }}>*성당 내 주차는 불가합니다. 주차권은 접수 테이블에서 받아주세요(2시간 무료) </p>
            </div>
        </div>
    );
}
