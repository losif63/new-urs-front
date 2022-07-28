import React, { useEffect } from "react";
import "./SelectDate.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios";

export default function SelectDate() {
  const lId = useSelector((state) => {
    return state.reservation.lID;
  });
  const [date, setDate] = useState("month");
  const [reservationList, setReservationList] = useState([]);
  const [monthColor, setMonthColor] = useState("#601986");
  const [weekColor, setWeekColor] = useState("#7A7A7A");
  const [dayColor, setDayColor] = useState("#7A7A7A");

  const [startDate, setStartDate] = useState(new Date());

  function Switcher() {
    if (date === "month") {
      return (
        <div className="calendarHolder">
          <Calendar
            className="calendar"
            formatDay={(locale, date) => Number(moment(date).format("DD"))}
            minDetail="month"
            maxDetail="month"
            // navigationLabel={null}
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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/roomreservations`,
      {
        l_id: lId,
        interval_start: `${moment(startDate.toLocaleDateString()).format("YYYY-MM-DD")} 00:00:00`,
        interval_end: `${moment(tomorrow.toLocaleDateString()).format("YYYY-MM-DD")} 00:00:00`
      }
    ).then((response) => {
      console.log(response.data);
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
            <div className="Calendar">
              <Switcher />
            </div>
            <div className="SelectBox">
              <div className="timeSelectButton">
                <div className="start">
                  <p className="Text">시작</p>
                  <input className="date" type="text" value={startDate.toLocaleDateString().replaceAll('/', '-')} readOnly/>
                  <input className="time" type="text"/>
                </div>
                <div className="finish">
                  <p className="Text">종료</p>
                  <input className="date" type="text" value={startDate.toLocaleDateString().replaceAll('/', '-')} readOnly/>
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
