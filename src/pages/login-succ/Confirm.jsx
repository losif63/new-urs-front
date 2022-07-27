import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Confirm.css";

export default function Confirm() {
  return (
    <div className="container">
      <div className="confirmContent">
        <div className="textMessage">이렇게 예약하시겠어요?</div>
        <div className="confirmHolder">
          <div className="confirmHeader">
            <div className="locationInfo1">그룹스터디룸 1</div>
            <div className="locationInfo2">교양분관</div>
          </div>
          <div className="locationDisplay">
            <div className="textDisplay">장소</div>
            <div className="infoDisplayWithMap">
              <div className="line">그룹스터디룸1</div>
              <div className="line">교양분관1F</div>
            </div>
            <div className="watchForMap">지도로 보기</div>
          </div>
          <div className="dateDisplay">
            <div className="textDisplay">일시</div>
            <div className="infoDisplay">
              <div className="line">2022년 5월 23일</div>
              <div className="line">14:30~16:00</div>
            </div>
          </div>
          <div className="nameDisplay">
            <div className="textDisplay">이름</div>
            <div className="infoDisplay">안태찬</div>
          </div>
          <div className="purposeDisplay">
            <div className="textDisplay">이용사유</div>
            <div className="infoDisplay">몰입캠프 스터디</div>
          </div>
        </div>
        <div className="confirmNextButton">
          <Link
            to="completeReservation"
            style={{ textDecoration: "none", color: "white" }}
          >
            예약 ➤
          </Link>
        </div>
      </div>
    </div>
  );
}
