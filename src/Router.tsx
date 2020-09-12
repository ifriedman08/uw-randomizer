import React, { FC } from "react";
import App from "./App";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";

interface IProps {}

const Router: FC<IProps> = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={App} path={"/:key"} />
      <Route component={App} path={"/"} exact />
    </BrowserRouter>
  );
};

export default Router;
