import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import loginSlice from "../loginSlice";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async () => {
    console.log("email", email);
    console.log("password", password);

    if (email === "" || password === "") {
      return window.alert("아이디와 비밀번호를 모두 입력해주세요");
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          email: email,
          password: password,
        }
      );

      if (data.isOK) {
        dispatch(loginSlice.actions.writeEmail(email));
        dispatch(loginSlice.actions.writePassword(password));

        return <Link to="myReservation"></Link>;
      } else {
        return window.alert("로그인 정보가 맞지 않습니다");
      }
    } catch (e) {
      return window.alert(`Error: ${e}`);
    }
  };

  return (
    <div className="loginPage">
      <div className="ursTitle">KAIST URS</div>
      <input
        className="input"
        type="text"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
