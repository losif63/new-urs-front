import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./MapView.css";

export default function MapView() {
  const [textColor1, setTextColor1] = useState("#601986");
  const [textColor2, setTextColor2] = useState("#7A7A7A");

  function Switcher() {
    if (textColor1 === "#601986") {
      return (
        <div className="Map1F">
          <div className="GroupStudyRoom1and8">
            <div className="GroupStudyRoom1">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 1
              </Link>
            </div>
            <div className="GroupStudyRoom2">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 2
              </Link>
            </div>
            <div className="GroupStudyRoom3">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 3
              </Link>
            </div>
            <div className="GroupStudyRoom4">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 4
              </Link>
            </div>
            <div className="GroupStudyRoom5">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 5
              </Link>
            </div>
            <div className="GroupStudyRoom6">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 6
              </Link>
            </div>
            <div className="GroupStudyRoom7">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 7
              </Link>
            </div>
            <div className="GroupStudyRoom8">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 8
              </Link>
            </div>
          </div>
          <div className="middle"></div>
          <div className="GroupStudyRoomAandD">
            <div className="GroupStudyRoomA">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 A
              </Link>
            </div>
            <div className="GroupStudyRoomB">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 B
              </Link>
            </div>
            <div className="GroupStudyRoomC">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 C
              </Link>
            </div>
            <div className="GroupStudyRoomD">
              <Link
                to="selectDate"
                style={{ textDecoration: "none", color: "#9b72b0" }}
              >
                그룹스터디룸 D
              </Link>
            </div>
            <div className="Office">사무실</div>
          </div>
        </div>
      );
    } else {
      return <div className="Map2F"></div>;
    }
  }

  return (
    <div className="roomInfo">
      <div className="leftBlank">
        <div className="floorSwitch">
          <div
            className="floor1"
            style={{ color: textColor1 }}
            onClick={() => {
              setTextColor1("#601986");
              setTextColor2("#7A7A7A");
            }}
          >
            1F
          </div>

          <div
            className="floor2"
            style={{ color: textColor2 }}
            onClick={() => {
              setTextColor1("#7A7A7A");
              setTextColor2("#601986");
            }}
          >
            2F
          </div>
        </div>
      </div>
      <Switcher />
    </div>
  );
}
