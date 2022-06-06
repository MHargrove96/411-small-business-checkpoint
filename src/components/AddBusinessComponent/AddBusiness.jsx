import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { Box, TextField, Button } from "@mui/material";
import MapComponent from "../MapComponent/MapComponent";
import { businessActions } from "../../redux/business-slice";
import UserNameBar from '../UserNameBarComponent/UserNameBar'

import classes from "./AddBusiness.module.css";

function AddBusiness() {
  // const [businessName, setBusinessName] = useState("");
  // const [businessAddress, setBusinessAddress] = useState("");
  // const [businessHours, setBusinessHours] = useState("");
  // const [businessDescription, setBusinessDescription] = useState("");
  const [newBusiness, setNewBusiness] = useState({
    name: '',
    address: '',
    hours: '',
    description: ''
  });

  // function validateForm() {
  //   return (
  //     businessName.length > 0 &&
  //     businessAddress.length > 0 &&
  //     businessHours.length > 0
  //   );
  // }
  const handleName = (e) => {
    setNewBusiness({ ...newBusiness, name: e.target.value });
  };
  const handleAddress = (e) => {
    setNewBusiness({ ...newBusiness, address: e.target.value });
  };
  const handleHours = (e) => {
    setNewBusiness({ ...newBusiness, hours: e.target.value });
  };
  const handleDescription = (e) => {
    setNewBusiness({ ...newBusiness, description: e.target.value });
  };
  const dispatch = useDispatch();
  const addBusiness = () => {
    dispatch(businessActions.addBusiness(newBusiness));
  };

  return (
    <main>
    <UserNameBar></UserNameBar>
      <section className={classes.main}>
        <Box className={classes.textFeildBox}>
          <TextField
            required
            onChange={handleName}
            value={newBusiness.name}
            label="Name"
            variant="standard"
          ></TextField>
          <TextField
            required
            onChange={handleAddress}
            value={newBusiness.address}
            label="Address"
            variant="standard"
          ></TextField>
          <TextField
            required
            onChange={handleHours}
            value={newBusiness.hours}
            label="Hours (ex. 8AM-9PM)"
            variant="standard"
          ></TextField>
          <TextField
            required
            onChange={handleDescription}
            value={newBusiness.description}
            label="Description"
            variant="standard"
          ></TextField>
          <Button
            className={classes.submitBtn}
            variant="contained"
            // disabled={!validateForm()}
            onClick={addBusiness}
          >
            SAVE
          </Button>
        </Box>
        <MapComponent business={newBusiness} className={classes.mapComponent}/>
      </section>
    </main>
  );
}

export default AddBusiness;
