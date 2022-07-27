import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./MyReservation.css";

function ReservationInstance(props) {
  return <div className="reservationInstance">
    <div className="textArea">
      <text className="room_name">{props.room_name}</text> <br></br>
      <text className="building_name">{props.building_name}</text> <br></br>
      <div className="dateTime">
        <text className="dateInfo">{props.dateInfo}</text> <br></br>
        <text className="timeInfo">{props.timeInfo}</text> <br></br>
      </div>
    </div>
  </div>;
}

function ReservationList(props) {
  const [reservations, setReservations] = useState([]);
  const uId = useSelector(state => {
    return state.login.u_id
  });

  useEffect(() => {
    switch(props.time) {
      case "current": {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/mycurrentreservations`,
        {
          u_id: uId
        }
        ).then((response) => {
          setReservations(response.data);
        });
        break;
      }
      case "future": {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/myfuturereservations`,
        {
          u_id: uId
        }
        ).then((response) => {
          setReservations(response.data);
        });
        break;
      }
      case "past": {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/mypastreservations`,
        {
          u_id: uId
        }
        ).then((response) => {
          setReservations(response.data);
        });
        break;
      }
      default: {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/myreservations`,
        {
          u_id: uId
        }
        ).then((response) => {
          setReservations(response.data);
        });
      }
    }
  }, []);

  return <div className="reservationList">
    {reservations.map(t => {
      return <ReservationInstance room_name={t.room_name} building_name={t.building_name} dateInfo={t.start_time.substring(0, 10)} timeInfo={t.start_time.substring(11, 19) + ' ~ ' + t.finish_time.substring(11, 19)}></ReservationInstance>
    })}
  </div>;
}

export default function MyReservation() {
  return <div className="container">
    <div className="content">
      <div className="currentReservations">
        <text className="status">현재 진행 중</text>
        <ReservationList time="current"></ReservationList>
      </div>
      <div className="futureReservations">
        <text className="status">예정</text>
        <ReservationList time="future"></ReservationList>
      </div>
      <div className="pastReservations">
        <text className="status">이전 기록</text>
        <ReservationList time="past"></ReservationList>
      </div>
    </div>
  </div>;
}
