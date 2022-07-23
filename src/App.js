import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="myReservation" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
