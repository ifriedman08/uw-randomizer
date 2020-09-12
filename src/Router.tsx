import React, { FC } from "react";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";

interface IProps {}

const Router: FC<IProps> = () => {
  return (
    <HashRouter basename="/">
      <Route component={App} path="/:key" />
    </HashRouter>
  );
};

export default Router;
