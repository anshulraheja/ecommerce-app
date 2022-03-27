import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DbProvider } from "./context/Dbcontext";
import { FilterProvider } from "./context/filter-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DbProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </DbProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
