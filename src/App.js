import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyReservation from "./pages/login-succ/MyReservation";
import Reservation from "./pages/login-succ/Reservation";
import ReservationListView from "./pages/login-succ/reservation/Reservation-ListView";
import SelectDate from "./pages/login-succ/SelectDate";
import ReservationInfo from "./pages/login-succ/ReservationInfo";
import Confirm from "./pages/login-succ/Confirm";
import CompleteReservation from "./pages/login-succ/CompleteReservation";

import { useState, useEffect } from "react";

import MyReservationOn from "./pages/login-succ/menuBar/MyReservationOn";
import MyReservationOff from "./pages/login-succ/menuBar/MyReservationOff";
import ReservationOn from "./pages/login-succ/menuBar/ReservationOn";
import ReservationOff from "./pages/login-succ/menuBar/ReservationOff";
import QRReservationOff from "./pages/login-succ/menuBar/QRReservationOff";

import "./App.css";
export default function App() {
  const [loginSucc, setLoginSucc] = useState(false);
  const [title, setTitle] = useState("");
  const [MyReservationMaskOn, setMyReservationMaskOn] = useState(false);
  const [ReservationMaskOn, setReservationMaskOn] = useState(true);

  useEffect(() => {
    return;
  }, [loginSucc, MyReservationOn, ReservationOn]);

  return (
    <BrowserRouter>
      {loginSucc ? (
        <div className="header">
          <div className="curTitle">{title}</div>
          <nav className="navBar">
            <li className="navBarMenu">
              <Link
                to="myReservation"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setTitle("나의 예약");
                  setMyReservationMaskOn(true);
                  setReservationMaskOn(false);
                }}
              >
                {MyReservationMaskOn ? (
                  <MyReservationOn />
                ) : (
                  <MyReservationOff />
                )}
              </Link>
            </li>
            <li className="navBarMenu">
              <Link
                to="reservation"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setTitle("예약");
                  setMyReservationMaskOn(false);
                  setReservationMaskOn(true);
                }}
              >
                {ReservationMaskOn ? <ReservationOn /> : <ReservationOff />}
              </Link>
            </li>
            <li className="navBarMenu">
              <QRReservationOff />
            </li>
          </nav>
        </div>
      ) : (
        <></>
      )}
      <Routes>
        {loginSucc ? (
          <>
            <Route path="/" element={<Navigate to="/reservation" />} />
            <Route path="reservation" element={<Reservation />} />
            <Route
              path="reservation/list-view"
              element={<ReservationListView />}
            />
            <Route
              path="reservation/list-view/selectDate"
              element={<SelectDate />}
            />
            <Route
              path="reservation/list-view/selectDate/reservationInfo"
              element={<ReservationInfo />}
            />
            <Route
              path="reservation/list-view/selectDate/reservationInfo/confirm"
              element={<Confirm />}
            />
            <Route
              path="reservation/list-view/selectDate/reservationInfo/confirm/completeReservation"
              element={<CompleteReservation />}
            />
            <Route path="myReservation" element={<MyReservation />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login setLoginSucc={setLoginSucc} />} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
