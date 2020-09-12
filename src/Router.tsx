import React, { FC } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

interface IProps {}

const Router: FC<IProps> = () => {
  return (
    <BrowserRouter basename="/uw-randomizer">
      <App />
    </BrowserRouter>
  );
};

export default Router;
