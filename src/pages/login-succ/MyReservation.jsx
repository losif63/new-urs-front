import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";
import axios from "axios";
import "./MyReservation.css";

import Approved from "./Approved";

function ReservationInstance(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  ReactModal.setAppElement("#root");
  const deleteReservation = async () => {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/reservation/cancelreservation`,
      {
        u_id: props.u_id,
        r_id: props.r_id,
      }
    );
    props.setReservations(
      props.reservations.filter((value, index, arr) => {
        return value.r_id !== props.r_id;
      })
    );
  };
  return (
    <div className="reservationInstance">
      <div className="textArea" onClick={() => setModalIsOpen(true)}>
        <div className="room_name">{props.room_name}</div>
        <div className="building_name">{props.building_name}</div>
        <div className="dateShowHolder">
          <div className="dateTime">
            <div className="dateInfo">{props.dateInfo}</div>
            <div className="timeInfo">{props.timeInfo}</div>
          </div>
          <div className="approvedMark">
            <Approved />
          </div>
        </div>
        <div className="borderLine"></div>
      </div>
      <ReactModal className="modal" isOpen={modalIsOpen}>
        <div className="backButton" onClick={() => setModalIsOpen(false)}>
          뒤로 가기
        </div>
        <div className="reservationInfoDisplay">
          <div className="confirmHeader">
            <div className="locationInfo1">{props.room_name}</div>
            <div className="locationInfo2">{props.building_name}</div>
          </div>
          <div className="locationDisplay">
            <div className="textDisplay">장소</div>
            <div className="infoDisplayWithMap">
              <div className="line">{props.room_name}</div>
              <div className="line">{props.building_name}</div>
            </div>
            <div className="watchForMap">지도로 보기</div>
          </div>
          <div className="dateDisplay">
            <div className="textDisplay">일시</div>
            <div className="infoDisplay">
              <div className="line">{props.dateInfo}</div>
              <div className="line">{props.timeInfo}</div>
            </div>
          </div>
          <div className="nameDisplay">
            <div className="textDisplay">이름</div>
            <div className="infoDisplay">{props.username}</div>
          </div>
          <div className="purposeDisplay">
            <div className="textDisplay">이용사유</div>
            <div className="infoDisplay">{props.activity_name}</div>
          </div>
        </div>
        <div className="cancelButton" onClick={deleteReservation}>
          예약 취소
        </div>
      </ReactModal>
    </div>
  );
}

function ReservationList(props) {
  const [reservations, setReservations] = useState([]);
  const uId = useSelector((state) => {
    return state.login.u_id;
  });

  useEffect(() => {
    switch (props.time) {
      case "current": {
        axios
          .post(
            `${process.env.REACT_APP_SERVER_URL}/reservation/mycurrentreservations`,
            {
              u_id: uId,
            }
          )
          .then((response) => {
            setReservations(response.data);
          });
        break;
      }
      case "future": {
        axios
          .post(
            `${process.env.REACT_APP_SERVER_URL}/reservation/myfuturereservations`,
            {
              u_id: uId,
            }
          )
          .then((response) => {
            setReservations(response.data);
          });
        break;
      }
      case "past": {
        axios
          .post(
            `${process.env.REACT_APP_SERVER_URL}/reservation/mypastreservations`,
            {
              u_id: uId,
            }
          )
          .then((response) => {
            setReservations(response.data);
          });
        break;
      }
      default: {
        axios
          .post(
            `${process.env.REACT_APP_SERVER_URL}/reservation/myreservations`,
            {
              u_id: uId,
            }
          )
          .then((response) => {
            setReservations(response.data);
          });
      }
    }
  }, []);

  return (
    <div className="reservationList">
      {reservations.map((t) => {
        var month = Number(t.start_time.substring(5, 7));
        var day = t.start_time.substring(8, 10);
        const week = ["일", "월", "화", "수", "목", "금", "토"];
        var weekDayName =
          week[new Date(t.start_time.substring(0, 10)).getDay()];
        var dateDisplay = `${month}월\u00a0${day}일\u00a0${weekDayName}`;

        return (
          <ReservationInstance
            reservations={reservations}
            setReservations={setReservations}
            u_id={uId}
            r_id={t.r_id}
            room_name={t.room_name}
            building_name={t.building_name}
            dateInfo={dateDisplay}
            timeInfo={
              t.start_time.substring(11, 16) +
              " ~ " +
              t.finish_time.substring(11, 16)
            }
            username={t.username}
            activity_name={t.activity_name}
          ></ReservationInstance>
        );
      })}
    </div>
  );
}

export default function MyReservation() {
  return (
    <div className="myReservationContainer">
      <div className="myReservationContent">
        <div className="currentReservations">
          <div className="status">현재 진행 중</div>
          <ReservationList time="current"></ReservationList>
        </div>
        <div className="futureReservations">
          <div className="status">예정</div>
          <ReservationList time="future"></ReservationList>
        </div>
        <div className="pastReservations">
          <div className="status">이전 기록</div>
          <ReservationList time="past"></ReservationList>
        </div>
      </div>
    </div>
  );
}
