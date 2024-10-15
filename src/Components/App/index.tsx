import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../Pages/Main";
import Registration from "../../Pages/Registration";
import "./reset.css";
import "./base.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
