import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchbusinessesData } from "../../redux/business-actions";
import classes from "./LocationDetails.module.css";
import MapComponent from "../MapComponent/MapComponent";

function LocationDetails() {
  let { id } = useParams();

  console.log("API KEY", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const { businesses } = useSelector((state) => {
    console.log(state.businesses, "state");
    return state;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchbusinessesData());
  }, [dispatch]);

  return (
    <main>
      {businesses
        .filter((business) => business.id === id)
        .map((business) => (
          <section className="businessInfo" key={business.id}>
            <h1 id="bizName" className="displayedText">
              {business.name}
            </h1>
            <h3 id="bizAddress" className="displayedText">
              {business.address}
            </h3>
            <h3 id="bizHours" className="displayedText">
              {business.hours}
            </h3>
            <p id="bizDescription" className="displayedText">
              {business.description}
            </p>
            <MapComponent business={business} />
          </section>
        ))}
    </main>
  );
}

export default LocationDetails;
