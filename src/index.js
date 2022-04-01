import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DbProvider } from "./context/Dbcontext";
import { FilterProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";
import { WishlistProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DbProvider>

        <AuthProvider>
          <WishlistProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </WishlistProvider>
        </ AuthProvider >

      </DbProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
