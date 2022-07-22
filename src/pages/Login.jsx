import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="loginPage">
      <div className="ursTitle">KAIST URS</div>
      <input
        className="input"
        type="text"
        placeholder="아이디를 입력해주세요"
      />
      <input
        className="input"
        type="text"
        placeholder="비밀번호를 입력해주세요"
      />
      <div className="button">
        <Link to="signup" style={{ textDecoration: "none" }}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;
