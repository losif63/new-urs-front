import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./SignUp.css";

function signUpHandler() {}

function SignUp() {
  return (
    <div className="loginPage">
      <div className="ursTitle">KAIST URS</div>
      <input
        className="input"
        type="text"
        placeholder="사용하실 아이디를 입력해주세요"
      />
      <input
        className="input"
        type="text"
        placeholder="사용하실 비밀번호를 입력해주세요"
      />
      <div className="button" onClick={signUpHandler}>
        회원가입
      </div>
      <div className="button">
        <Link to="/" style={{ textDecoration: "none" }}>
          뒤로 가기
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
