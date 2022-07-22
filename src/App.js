import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="myReservation" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
