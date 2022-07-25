import React from "react";
import { useState } from "react";

import "./Reservation-ListView.css";
import { Link } from "react-router-dom";

export default function ReservationListView() {
  const [listOn, setListOn] = useState(true);
  const [mapColor, setMapColor] = useState("#7A7A7A");
  const [listColor, setListColor] = useState("#601986");

  function Switcher() {
    if (listOn) {
      return (
        <div className="roomInfo">
          <div className="Floor1">
            <div className="floorName">
              <p>1F</p>
            </div>
            <div>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">그룹스터디룸</p>
              </Link>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">열람실</p>
              </Link>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">노트북열람실</p>
              </Link>
            </div>
          </div>
          <div className="Floor2">
            <div className="floorName">
              <p>2F</p>
            </div>
            <div>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">세미나실</p>
              </Link>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">열람실</p>
              </Link>
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p className="roomName">노트북열람실</p>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="roomInfo"></div>;
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">이용하실 방을 선택해주세요</div>
        <div className="locationHolder">
          <div className="locationHeader">
            <div className="locationName">교양분관</div>
            <div className="switchListView">
              <div
                className="forMap"
                onClick={() => {
                  setListOn(false);
                  setMapColor("#601986");
                  setListColor("#7A7A7A");
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
