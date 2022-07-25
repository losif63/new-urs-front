import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./MyReservation.css";


function ReservationInstances(props) {
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



export default function MyReservation() {

  const uId = useSelector(state => state.u_id);
  console.log('my UID: ' + uId);
  axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/myreservations`,
  {
    u_id: uId
  }
  ).then((response) => {
    if(response.status === 200) {
      for(const data in response.data) {
        console.log(data);
      }
    }
  });

  return <div className="container">
    <div className="content">
      <div className="currentReservations">
        <text className="status">현재 진행 중</text>
        <div className="reservationList">
          <ReservationInstances></ReservationInstances>
        </div>
      </div>
      <div className="futureReservations">
        <text className="status">예정</text>
        <div className="reservationList">
          <ReservationInstances></ReservationInstances>
        </div>
      </div>
    </div>
  </div>;
}
