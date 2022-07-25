import React from "react";
import "./SelectDate.css";

import { Link } from "react-router-dom";

export default function SelectDate() {
  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">이용하실 일시를 선택해주세요</div>
        <div className="dateHolder">
          <div className="dateHeader">
            <div className="switchDateView">
              <div className="month" onClick={() => {}}>
                월
              </div>
              <div className="week" onClick={() => {}}>
                주
              </div>
              <div className="day" onClick={() => {}}>
                일
              </div>
            </div>
            <div className="currentButtonHolder">
              <div className="currentButton">현재</div>
            </div>
          </div>
          <div className="roomInfo">
            <div className="Calendar"></div>

            <div className="SelectBox">
              <div className="timeSelectButton">
                <div className="start">
                  <p className="Text">시작</p>
                  <input className="date" type="text" />
                  <input className="time" type="text" />
                </div>
                <div className="finish">
                  <p className="Text">종료</p>
                  <input className="date" type="text" />
                  <input className="time" type="text" />
                </div>
              </div>
              <div className="nextButton">다음 ➤</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
