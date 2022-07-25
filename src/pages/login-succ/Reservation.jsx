import React from "react";
import Library from "./location/Library";
import SportComplex from "./location/SportComplex";
import StudyBuilding from "./location/StudyBuilding";
import PlayGround from "./location/PlayGround";

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
            <Library />
            <SportComplex />
            <PlayGround />
            <StudyBuilding />
          </div>
        </div>
      </div>
    </div>
  );
}
