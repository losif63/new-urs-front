import { Link } from "react-router-dom";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import signUpSlice from "./../signUpSlice";
import loginSlice from "../loginSlice";

import "./SignUp.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const SignUpHandler = async () => {
    if (name === "" || email === "" || password === "") {
      return window.alert("이름, 이메일, 비밀번호를 모두 입력해주세요");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/createuser`,
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.status === 201) {
        dispatch(loginSlice.actions.writeName(name));
        dispatch(signUpSlice.actions.writeEmail(email));
        dispatch(signUpSlice.actions.writePassword(password));
        return window.alert("회원가입이 성공적으로 완료되었습니다");
      }
    } catch (e) {
      if (e.response.status === 409) {
        return window.alert("이미 존재하는 이메일입니다");
      } else {
        return window.alert(`Error: ${e}`);
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="ursTitle">KAIST URS</div>
      <input
        className="signUpInput"
        type="text"
        placeholder="사용하실 이용자 이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="signUpInput"
        type="text"
        placeholder="사용하실 이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signUpInput"
        type="text"
        placeholder="사용하실 비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button" onClick={SignUpHandler}>
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
