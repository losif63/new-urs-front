import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyReservation from "./pages/login-succ/MyReservation";

import { useSelector } from "react-redux";

import "./App.css";

export default function App() {
  const loginSucc = useSelector((state) => {
    return state.login.loginSucc;
  });

  return (
    <BrowserRouter>
      <Routes>
        {loginSucc ? (
          <>
            <Route path="myReservation" element={<MyReservation />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
