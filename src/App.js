import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyReservation from "./pages/login-succ/MyReservation";
import Reservation from "./pages/login-succ/Reservation";

import { useSelector } from "react-redux";

import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [loginSucc, setLoginSucc] = useState(false);

  useState(()=>{
    return;
  }, [loginSucc]);
  
  return (
    <BrowserRouter>
      {loginSucc ? (
        <nav className="navBar">
          <li className="navBarMenu">
            <Link to="myReservation" style={{ textDecoration: "none" }}>
              <p className="navTitle">나의 예약</p>
            </Link>
          </li>
          <li className="navBarMenu">
            <Link to="reservation" style={{ textDecoration: "none" }}>
              <p className="navTitle">예약</p>
            </Link>
          </li>
          <li className="navBarMenu">
            <p className="navTitle">QR 예약</p>
          </li>
        </nav>
      ) : (
        <></>
      )}
      <Routes>
        {loginSucc ? (
          <>
            <Route path="reservation" element={<Reservation />} />
            <Route path="myReservation" element={<MyReservation />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login setLoginSucc={setLoginSucc}/>} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
