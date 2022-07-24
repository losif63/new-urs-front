import React from "react";
import "./MyReservation.css";

export default function MyReservation() {
  return <div className="container">
    <div className="content">
      <div className="currentReservations">
        <text className="status">현재 진행 중</text>
        <div className="reservationList">
          <div className="reservationInstance">

          </div>
        </div>
      </div>
      <div className="futureReservations">
        <text className="status">예정</text>
        <div className="reservationList">
          <div className="reservationInstance">

          </div>
        </div>
      </div>
    </div>
  </div>;
}
