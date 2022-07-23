import { Link } from "react-router-dom";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import signUpSlice from "./../signUpSlice";

import "./SignUp.css";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const SignUpHandler = async () => {
    console.log("id", id);
    console.log("password", password);

    if (id === "" || password === "") {
      return window.alert("아이디와 비밀번호를 모두 입력해주세요");
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup`,
        {
          id: id,
          password: password,
        }
      );

      if (data.isOK) {
        dispatch(signUpSlice.actions.writeId(id));
        dispatch(signUpSlice.actions.writePassword(password));
        return window.alert("회원가입이 성공적으로 완료되었습니다");
      } else {
        return window.alert("이미 존재하는 회원 정보입니다");
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
        placeholder="사용하실 아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="input"
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
