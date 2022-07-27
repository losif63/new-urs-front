import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";
import axios from "axios";
import "./MyReservation.css";

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
        return value.r_id != props.r_id;
      })
    );
  };
  return (
    <div className="reservationInstance">
      <div className="textArea">
        <text className="room_name">{props.room_name}</text> <br></br>
        <text className="building_name">{props.building_name}</text> <br></br>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #aaa",
            lineHeight: "0.1em",
            margin: "30px 0 10px",
          }}
        ></div>
        <div className="dateTime">
          <text className="dateInfo">{props.dateInfo}</text> <br></br>
          <text className="timeInfo">{props.timeInfo}</text> <br></br>
        </div>
        <button onClick={() => setModalIsOpen(true)}>상세보기</button>
        <ReactModal
          isOpen={modalIsOpen}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(50, 50, 50, 0.9)",
            },
            content: {
              position: "absolute",
              top: "15%",
              left: "40%",
              right: "40%",
              bottom: "15%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "27px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <button onClick={() => setModalIsOpen(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modalTitle">
            <text>{props.room_name}</text>
            <br></br>
            <text>{props.building_name}</text>
            <br></br>
          </div>
          <text>{props.room_name}</text>
          <br></br>
          <text>{props.building_name}</text>
          <br></br>
          <text>{props.dateInfo}</text>
          <br></br>
          <text>{props.timeInfo}</text>
          <br></br>
          <text>{props.username}</text>
          <br></br>
          <text>{props.activity_name}</text>
          <br></br>
          <button onClick={deleteReservation}>예약 취소</button>
        </ReactModal>
      </div>
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
        return (
          <ReservationInstance
            reservations={reservations}
            setReservations={setReservations}
            u_id={uId}
            r_id={t.r_id}
            room_name={t.room_name}
            building_name={t.building_name}
            dateInfo={t.start_time.substring(0, 10)}
            timeInfo={
              t.start_time.substring(11, 19) +
              " ~ " +
              t.finish_time.substring(11, 19)
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
    <div className="container">
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
    </div>
  );
}
