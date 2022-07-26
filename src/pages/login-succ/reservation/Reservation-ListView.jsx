import React from "react";
import { useState } from "react";

import ListView from "./ListView";
import MapView from "./MapView";

import "./Reservation-ListView.css";

export default function ReservationListView() {
  const [listOn, setListOn] = useState(true);
  const [mapColor, setMapColor] = useState("#7A7A7A");
  const [listColor, setListColor] = useState("#601986");
  const [textColor, setTextColor] = useState("#601986");
  const [backColor, setBackColor] = useState("#FFFFFF");

  function Switcher() {
    if (listOn) {
      return <ListView />;
    } else {
      return <MapView />;
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">이용하실 방을 선택해주세요</div>
        <div className="locationHolder" style={{ backgroundColor: backColor }}>
          <div className="locationHeader">
            <div className="locationName" style={{ color: textColor }}>
              교양분관
            </div>
            <div className="switchListView">
              <div
                className="forMap"
                onClick={() => {
                  setListOn(false);
                  setMapColor("#601986");
                  setListColor("#7A7A7A");
                  setTextColor("#FFFFFF");
                  setBackColor("#9B72B0");
                }}
                style={{ color: mapColor }}
              >
                지도
              </div>
              <div
                className="forList"
                onClick={() => {
                  setListOn(true);
                  setMapColor("#7A7A7A");
                  setListColor("#601986");
                  setTextColor("#601986");
                  setBackColor("#FFFFFF");
                }}
                style={{ color: listColor }}
              >
                목록
              </div>
            </div>
          </div>
          <Switcher />
        </div>
      </div>
    </div>
  );
}
