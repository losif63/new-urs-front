import React from "react";
import "./Reservation.css";

export default function Reservation() {
  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">예약하실 장소를 선택해주세요</div>
        <input
          className="search"
          type="text"
          placeholder="🔍 용도, 건물 혹은 장소 검색"
        />
        <div className="locationHolder">
          <div className="switch">
            <div
              className="forUse"
              onClick={() => {
                alert("용도별");
              }}
            >
              용도별
            </div>
            <div
              className="forLocation"
              onClick={() => {
                alert("건물별");
              }}
            >
              건물별
            </div>
          </div>
          <div className="location">
            <img className="학술문화관" src="학술문화관.png" />
            <img className="스포츠컴플렉스" src="스포츠컴플렉스.png" />
            <img className="북측운동장" src="북측운동장.png" />
            <img className="교양분관" src="교양분관.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
