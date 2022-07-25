import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Library from "./location/Library";
import SportComplex from "./location/SportComplex";
import StudyBuilding from "./location/StudyBuilding";
import PlayGround from "./location/PlayGround";

import "./Reservation.css";

export default function Reservation() {
  const [buildingOn, setBuildingOn] = useState(true);
  const [useColor, setUseColor] = useState("#7A7A7A");
  const [buildingColor, setbuildingColor] = useState("#601986");

  function Switcher() {
    if (buildingOn) {
      return (
        <div className="location">
          <Library />
          <SportComplex />
          <PlayGround />
          <Link to="list-view">
            <StudyBuilding />
          </Link>
        </div>
      );
    } else {
      return <div className="location"></div>;
    }
  }

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
                setBuildingOn(false);
                setUseColor("#601986");
                setbuildingColor("#7A7A7A");
              }}
              style={{ color: useColor }}
            >
              용도별
            </div>
            <div
              className="forLocation"
              onClick={() => {
                setBuildingOn(true);
                setUseColor("#7A7A7A");
                setbuildingColor("#601986");
              }}
              style={{ color: buildingColor }}
            >
              건물별
            </div>
          </div>
          <Switcher />
        </div>
      </div>
    </div>
  );
}
