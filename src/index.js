import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DbProvider } from "./context/Dbcontext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DbProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DbProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
