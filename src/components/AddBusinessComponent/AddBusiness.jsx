import React, { useState, useEffect } from "react";

import { Box, TextField, Button } from "@mui/material";
// import MapComponent from "../MapComponent/MapComponent";

function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [newBusiness, setNewBusiness] = useState([]);

  function validateForm() {
    return (
      businessName.length > 0 &&
      businessAddress.length > 0 &&
      businessHours.length > 0
    );
  }
  const handleName = (e) => {
    setBusinessName(e.target.value);
  };
  const handleAddress = (e) => {
    setBusinessAddress(e.target.value);
  };
  const handleHours = (e) => {
    setBusinessHours(e.target.value);
  };
  const handleDescription = (e) => {
    setBusinessDescription(e.target.value);
  };
    const createBusinessPoint = (e) => {
      setNewBusiness([{
        name: { businessName },
        address: { businessAddress },
        hours: { businessHours },
        description: { businessDescription },
      }]);
    };
  // useEffect(() => {
  //   console.log(businessName);
  //   console.log(businessAddress);
  //   console.log(businessHours);
  //   console.log(businessDescription);
  // }, [businessName, businessAddress, businessHours, businessDescription]);

  return (
    <main>
      <Box>
        <TextField
          required
          onChange={handleName}
          value={businessName}
          label="Name"
          variant="standard"
          fullWidth
        ></TextField>
        <TextField
          required
          onChange={handleAddress}
          value={businessAddress}
          label="Address"
          variant="standard"
          fullWidth
        ></TextField>
        <TextField
          required
          onChange={handleHours}
          value={businessHours}
          label="Hours (ex. 8AM-9PM)"
          variant="standard"
          fullWidth
        ></TextField>
        <TextField
          required
          onChange={handleDescription}
          value={businessDescription}
          label="Description"
          variant="standard"
          fullWidth
        ></TextField>
        <Button variant="contained" type="submit" disabled={!validateForm()}>
          SAVE
        </Button>
      </Box>
      {/* <MapComponent  />  */}
    </main>
  );
}

export default AddBusiness;
