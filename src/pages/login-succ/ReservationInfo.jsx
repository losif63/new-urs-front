import React from "react";
import "./ReservationInfo.css";
import { useState, useEffect } from "react";
import NameCheckOn from "./reservation/myNameCheck/NameCheckOn";
import NameCheckOff from "./reservation/myNameCheck/NameCheckOff";
import PolicyCheckOn from "./reservation/policyCheck/PolicyCheckOn";
import PolicyCheckOff from "./reservation/policyCheck/PolicyCheckOff";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import reservationSlice from "./../../reservationSlice";
import loginSlice from "../../loginSlice";

export default function ReservationInfo() {
  const [myNameCheck, setMyNameCheck] = useState(false);
  const [policyCheck, setPolicyCheck] = useState(false);
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");

  const dispatch = useDispatch();
  const myName = useSelector((state) => {
    return state.login.name;
  });

  useEffect(() => {
    if (name === "") {
      setMyNameCheck(false);
    }
  }, [name]);

  return (
    <div className="container">
      <div className="content">
        <div className="textMessage">아래 정보를 기입해주세요</div>
        <div className="boxTitleHolder">
          <div className="userInfoTitle">이용자 정보</div>
          <div className="userPolicyTitle">이용 약관</div>
        </div>
        <div className="reservationInfoHolder">
          <div className="userInfo">
            <div className="nameInputPart">
              <div className="myName">이름</div>
              <input
                className="nameInput"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div
              className="checkName"
              onClick={() => {
                setMyNameCheck(!myNameCheck);
                if (name) {
                  setName("");
                } else {
                  console.log(myName);
                  setName(myName);
                }
              }}
            >
              {myNameCheck ? <NameCheckOn /> : <NameCheckOff />}
            </div>
            <div className="useInputPart">
              <div className="use">이용사유</div>
              <textarea
                className="useInput"
                value={purpose}
                onChange={(e) => {
                  setPurpose(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="userPolicy">
            <div className="userPolicyInput"></div>
            <div
              className="checkPolicy"
              onClick={() => {
                setPolicyCheck(!policyCheck);
              }}
            >
              {policyCheck ? <PolicyCheckOn /> : <PolicyCheckOff />}
            </div>
            <div
              className="nextButtonInfo"
              style={{
                backgroundColor:
                  policyCheck && name && purpose ? "#601986" : "#9fa0a0",
              }}
            >
              <Link
                to="confirm"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  dispatch(reservationSlice.actions.writeName(name));
                  dispatch(reservationSlice.actions.writePurpose(purpose));
                }}
              >
                다음 ➤
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
