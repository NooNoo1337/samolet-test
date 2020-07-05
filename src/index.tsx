import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { LibsProvider } from "./contexts/libsContext";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ruRU from "antd/lib/locale-provider/ru_RU";

import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <BrowserRouter>
      <LibsProvider>
        <App />
      </LibsProvider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root")
);
