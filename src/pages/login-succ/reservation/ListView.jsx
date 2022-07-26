import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";

export default function ListView() {
  return (
    <div className="roomInfo">
      <div className="Floor1">
        <div className="floorName">
          <p>1F</p>
        </div>
        <div>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">그룹스터디룸</p>
          </Link>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">열람실</p>
          </Link>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">노트북열람실</p>
          </Link>
        </div>
      </div>
      <div className="Floor2">
        <div className="floorName">
          <p>2F</p>
        </div>
        <div>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">세미나실</p>
          </Link>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">열람실</p>
          </Link>
          <Link
            to="selectDate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="roomName">노트북열람실</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
