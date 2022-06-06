import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchbusinessesData } from "../../redux/business-actions";
import classes from "./LocationDetails.module.css";
import MapComponent from "../MapComponent/MapComponent";
import { GoogleMap } from "@react-google-maps/api";

function LocationDetails() {
  let { id } = useParams();

  const { businesses } = useSelector((state) => {
    return state.businesses;
  });

  return (
    <main>
      {businesses
        .filter((business) => business.id.toString() === id)
        .map((business) => (
          <section className={classes.businessInfo_box} key={business.id}>
            <h1 id="bizName" className={classes.displayedText}>
              {business.name}
            </h1>
            <h3 id="bizAddress" className={classes.displayedText}>
              {business.address}
            </h3>
            <h3 id="bizHours" className={classes.displayedText}>
              {business.hours}
            </h3>
            <p id="bizDescription" className={classes.displayedText}>
              {business.description}
            </p>
            <MapComponent business={business} />
          </section>
        ))}
    </main>
  );
}

export default LocationDetails;
