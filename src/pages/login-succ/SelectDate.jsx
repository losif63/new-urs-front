import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";

import loginSlice from "../../loginSlice";
import reservationSlice from "../../reservationSlice";

import "./SelectDate.css";
import Reservation from "./Reservation";

export default function SelectDate() {
  const lId = useSelector((state) => {
    return state.reservation.lID;
  });
  const [date, setDate] = useState("month");
  const [reservationList, setReservationList] = useState([]);
  const [monthColor, setMonthColor] = useState("#601986");
  const [weekColor, setWeekColor] = useState("#7A7A7A");
  const [dayColor, setDayColor] = useState("#7A7A7A");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  function Resevation(props) {
    const interval_start = props.interval_start.substring(11, 16);
    const interval_end = props.interval_end.substring(11, 16);

    var colors = ["#ffaf36", "#36C3FF", "#9B72B0"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    const time = `${interval_start}~${interval_end}`;
    return (
      <div
        className="Reservation"
        style={{ backgroundColor: `${randomColor}` }}
      >
        <div className="R_Name">{props.name}</div>
        <div className="R_time">{time}</div>
      </div>
    );
  }

  function Resevations() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return (
      <div className="Reservations">
        {reservationList.map((t) => {
          return (
            <Resevation
              name={t.username}
              interval_start={t.start_time}
              interval_end={t.finish_time}
            />
          );
        })}
      </div>
    );
  }

  function Switcher() {
    if (date === "month") {
      return (
        <div className="calendarHolder">
          <Calendar
            className="calendar"
            formatDay={(locale, date) => Number(moment(date).format("DD"))}
            minDetail="month"
            maxDetail="month"
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            onChange={setStartDate}
            value={startDate}
          />
        </div>
      );
    } else if (date === "week") {
      return <div>week</div>;
    } else if (date === "day") {
      return <div>day</div>;
    }
  }

  useEffect(() => {
    const tomorrow = new Date(startDate);
    tomorrow.setDate(startDate.getDate() + 1);
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/reservation/roomreservations`,
        {
          l_id: lId,
          interval_start: `${moment(startDate.toLocaleDateString()).format(
            "YYYY-MM-DD"
          )} 00:00:00`,
          interval_end: `${moment(tomorrow.toLocaleDateString()).format(
            "YYYY-MM-DD"
          )} 00:00:00`,
        }
      )
      .then((response) => {
        console.log(response.data);
        setReservationList(response.data);
      });
  }, [startDate]);

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
                  setDate("day");
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
            <div className="switchDisplayView">
              <Switcher />
            </div>
            <div className="SelectBox">
              <div className="timeDisplay">
                <Resevations />
              </div>
              <div className="timeSelectButton">
                <div className="start">
                  <p className="Text">시작</p>
                  <input
                    className="date"
                    type="text"
                    value={moment(startDate.toLocaleDateString()).format(
                      "YYYY-MM-DD"
                    )}
                    readOnly
                  />
                  <input
                    className="time"
                    id="startingTime"
                    type="text"
                    placeholder="HH:MM:SS"
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </div>
                <div className="finish">
                  <p className="Text">종료</p>
                  <input
                    className="date"
                    type="text"
                    value={moment(startDate.toLocaleDateString()).format(
                      "YYYY-MM-DD"
                    )}
                    readOnly
                  />
                  <input
                    className="time"
                    id="finishingTime"
                    type="text"
                    placeholder="HH:MM:SS"
                    onChange={(e) => {
                      setEndTime(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className="nextButton"
                style={{
                  backgroundColor: startTime && endTime ? "#601986" : "#9fa0a0",
                }}
              >
                <Link
                  to="reservationInfo"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    console.log(
                      `${moment(startDate.toLocaleDateString()).format(
                        "YYYY-MM-DD"
                      )} ${document.getElementById("startingTime").value}`
                    );
                    console.log(
                      `${moment(startDate.toLocaleDateString()).format(
                        "YYYY-MM-DD"
                      )} ${document.getElementById("finishingTime").value}`
                    );
                    dispatch(
                      reservationSlice.actions.writeStartTime(
                        `${moment(startDate.toLocaleDateString()).format(
                          "YYYY-MM-DD"
                        )} ${document.getElementById("startingTime").value}`
                      )
                    );
                    dispatch(
                      reservationSlice.actions.writeFinishTime(
                        `${moment(startDate.toLocaleDateString()).format(
                          "YYYY-MM-DD"
                        )} ${document.getElementById("finishingTime").value}`
                      )
                    );
                  }}
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
