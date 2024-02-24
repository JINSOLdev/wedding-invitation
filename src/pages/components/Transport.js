export default function Transport() {
  return (
    <div className="transport">
      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ fontSize: "1.3rem", fontWeight: "bold" }}
            >
              지하철
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <strong>2호선, 5호선 충정로역 하차</strong>
              </p>
              <p>4번 출구 : 한국경제신문사 코너 우측 200m 이동 (정문)</p>
              <p>5번 출구 : 300m 직진 후 중림파출소 맞은편 이동 (후문)</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ fontSize: "1.3rem", fontWeight: "bold" }}
            >
              버스
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <strong>한국경제신문사 앞</strong> : 7011, 7013 A/B, 7017
              </p>
              <p>
                <strong>충정로 2번 출구</strong> : 2500, 8601, M6117, 1002, 600,
                602
              </p>
              <p>
                <strong>충정로 4번 출구</strong> : 1100, 1200, 1300, 1301, 1400,
                1500
                <p style={{ marginLeft: "2.3rem" }}>M6118, 172, 472, 603</p>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ fontSize: "1.3rem", fontWeight: "bold" }}
            >
              자동차
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>서소문성지역사박문관 공영주차장</strong>
              <p>서울특별시 중구 칠패로 5</p>
              <p>
                성당 내 주차가 불가한 점 안내 드립니다. <br />
                주차권은 접수 테이블에서 받아주세요. (2시간 무료)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
