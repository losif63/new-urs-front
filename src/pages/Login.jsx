import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Login.css";

function loginHandler() {}

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
      <div className="button" onClick={loginHandler}>
        로그인
      </div>
      <div className="button">
        <Link to="signup" style={{ textDecoration: "none" }}>
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default Login;
