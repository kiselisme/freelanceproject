import React from "react";
import s from "./App.module.scss";
import Main from "../Main";
import "swiper/css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Auth from "../auth/Auth";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import Registr from '../../components/Regist/Registr';

export const App = () => {
  return (
    <div className={s.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/registr" element={<Registr/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;