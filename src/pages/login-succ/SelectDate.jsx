import React from "react";
import "./SelectDate.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectDate() {
  const [date, setDate] = useState("month");
  const [monthColor, setMonthColor] = useState("#601986");
  const [weekColor, setWeekColor] = useState("#7A7A7A");
  const [dayColor, setDayColor] = useState("#7A7A7A");

  function Switcher() {
    if (date === "month") {
      return <div>month</div>;
    } else if (date === "week") {
      return <div>week</div>;
    } else if (date === "day") {
      return <div>day</div>;
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">이용하실 일시를 선택해주세요</div>
        <div className="dateHolder">
          <div className="dateHeader">
            <div className="switchDateView">
              <div
                className="month"
                onClick={() => {
                  setDate("month");
                  setMonthColor("#601986");
                  setWeekColor("#7A7A7A");
                  setDayColor("#7A7A7A");
                }}
                style={{ color: monthColor }}
              >
                월
              </div>
              <div
                className="week"
                onClick={() => {
                  setDate("week");
                  setMonthColor("#7A7A7A");
                  setWeekColor("#601986");
                  setDayColor("#7A7A7A");
                }}
                style={{ color: weekColor }}
              >
                주
              </div>
              <div
                className="day"
                onClick={() => {
                  setDate("week");
                  setMonthColor("#7A7A7A");
                  setWeekColor("#7A7A7A");
                  setDayColor("#601986");
                }}
                style={{ color: dayColor }}
              >
                일
              </div>
            </div>
            <div className="currentButtonHolder">
              <div className="currentButton">현재</div>
            </div>
          </div>
          <div className="roomInfo">
            <div className="Calendar">
              <Switcher />
            </div>
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
              <div className="nextButton">
                <Link
                  to="reservationInfo"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  다음 ➤
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
