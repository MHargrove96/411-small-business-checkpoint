import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Box, TextField, Button } from "@mui/material";
import MapComponent from "../MapComponent/MapComponent";
import { businessActions } from "../../redux/business-slice";

function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [newBusiness, setNewBusiness] = useState({});

  function validateForm() {
    return (
      businessName.length > 0 &&
      businessAddress.length > 0 &&
      businessHours.length > 0
    );
  }
  const handleName = (e) => {
    setBusinessName(e.target.value);
    setNewBusiness({ ...newBusiness, name: businessName });
  };
  const handleAddress = (e) => {
    setBusinessAddress(e.target.value);
    setNewBusiness({ ...newBusiness, address: businessAddress });
  };
  const handleHours = (e) => {
    setBusinessHours(e.target.value);
    setNewBusiness({ ...newBusiness, hours: businessHours });
  };
  const handleDescription = (e) => {
    setBusinessDescription(e.target.value);
    setNewBusiness({ ...newBusiness, description: businessDescription });
  };
  const dispatch = useDispatch();
  const addBusiness = () => {
    dispatch(businessActions.addBusiness(newBusiness));
  };

  // useEffect(() => {
  //   console.log(newBusiness)
  // },
  // [newBusiness]);

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
        <Button
          variant="contained"
          disabled={!validateForm()}
          onClick={addBusiness}
        >
          SAVE
        </Button>
      </Box>
      <MapComponent business={newBusiness} />
    </main>
  );
}

export default AddBusiness;
