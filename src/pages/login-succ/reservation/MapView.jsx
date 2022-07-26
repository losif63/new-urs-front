import React from "react";
import { useState } from "react";

import "./MapView.css";

export default function MapView() {
  const [textColor1, setTextColor1] = useState("#601986");
  const [textColor2, setTextColor2] = useState("#7A7A7A");

  function Switcher() {
    if (textColor1 === "#601986") {
      return (
        <div className="Map1F">
          <div className="GroupStudyRoom1and8">
            <div className="GroupStudyRoom1">그룹스터디룸 1</div>
            <div className="GroupStudyRoom2">그룹스터디룸 2</div>
            <div className="GroupStudyRoom3">그룹스터디룸 3</div>
            <div className="GroupStudyRoom4">그룹스터디룸 4</div>
            <div className="GroupStudyRoom5">그룹스터디룸 5</div>
            <div className="GroupStudyRoom6">그룹스터디룸 6</div>
            <div className="GroupStudyRoom7">그룹스터디룸 7</div>
            <div className="GroupStudyRoom8">그룹스터디룸 8</div>
          </div>
          <div className="middle"></div>
          <div className="GroupStudyRoomAandD">
            <div className="GroupStudyRoomA">그룹스터디룸 A</div>
            <div className="GroupStudyRoomB">그룹스터디룸 B</div>
            <div className="GroupStudyRoomC">그룹스터디룸 C</div>
            <div className="GroupStudyRoomD">그룹스터디룸 D</div>
            <div className="Office">사무실</div>
          </div>
        </div>
      );
    } else {
      return <div className="Map2F">2F</div>;
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
