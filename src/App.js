import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { fetchbusinessesData } from "./redux/business-actions";


import HeaderNavBar from "./components/HeaderNavBarComponent/HeaderNavBar";

function App() {
  const { businesses } = useSelector((state) => {
    return state.businesses;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (businesses.length === 0) {
      dispatch(fetchbusinessesData());
    }
    console.log(businesses);
  }, [dispatch, businesses]);

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
