import React from "react";

function MapComponent(props) {
  const { name, city, state, address } = props.business;
  let addressParam = [name, city, state, address]
    .join(" ")
    .split(" ")
    .join("+")
    .replaceAll(",", "");

  return (
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      &q=${addressParam}`}
    ></iframe>
  );
}

export default MapComponent;