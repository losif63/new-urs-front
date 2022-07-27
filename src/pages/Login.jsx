import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import loginSlice from "../loginSlice";

import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async () => {
    console.log("email", email);
    console.log("password", password);

    if (email === "" || password === "") {
      return window.alert("이메일과 비밀번호를 모두 입력해주세요");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        dispatch(loginSlice.actions.writeUId(response.data.u_id));
        dispatch(loginSlice.actions.writeName(response.data.name));
        dispatch(loginSlice.actions.writeEmail(email));
        dispatch(loginSlice.actions.writePassword(password));

        props.setLoginSucc(true);
        return window.alert("Login Succ");
      }
    } catch (e) {
      if (e.response.status === 404) {
        return window.alert("로그인 정보가 맞지 않습니다");
      } else {
        return window.alert(`Error: ${e}`);
      }
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
