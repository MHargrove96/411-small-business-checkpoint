import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import HeaderNavBar from "./components/HeaderNavBarComponent/HeaderNavBar";


function App() {
  return (
    <BrowserRouter>
      <header>
        <HeaderNavBar />
      </header>
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
