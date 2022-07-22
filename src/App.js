import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import MyReservation from "./pages/MyReservation";
import Reservation from "./pages/Reservation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navBar">
        <li className="navBarMenu">
          <Link to="myReservation">
            <p className="navTitle">나의 예약</p>
          </Link>
        </li>
        <li className="navBarMenu">
          <Link to="reservation">
            <p className="navTitle">예약</p>
          </Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="myReservation" element={<MyReservation />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
