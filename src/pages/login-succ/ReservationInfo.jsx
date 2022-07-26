import React from "react";
import "./ReservationInfo.css";

export default function ReservationInfo() {
  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">아래 정보를 기입해주세요</div>
        <div className="reservationInfoHolder">
          <div className="userInfo">
            <div className="nameInputPart">
              <div className="myName">이름</div>
              <input className="nameInput" />
            </div>
            <div className="checkDiv"></div>
            <div className="useInputPart">
              <div className="use">이용사유</div>
              <input className="useInput" />
            </div>
          </div>
          <div className="userPolicy">
            <div className="userPolicyInput"></div>
            <div className="check"></div>
            <div className="nextButton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
