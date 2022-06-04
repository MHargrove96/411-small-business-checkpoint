import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";


import { Box, TextField, Button } from "@mui/material";

import classes from "./LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let dispatch =  useDispatch();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const { online } = useSelector((state) => {
    return state
  })
  const login = (e) => {
    dispatch(userActions.login());
    localStorage.setItem('user', 'test')
    navigate(-1)

  };

  return (
    <Box
      className={classes.formContainer}
      component="form"
      noValidate
      autoComplete="off"
    >
      {" "}
      <TextField
        className={classes.userNameTf}
        required
        onChange={handleUsername}
        value={username}
        label="Username"
        variant="standard"
        fullWidth
      />
      <TextField
        className={classes.passWordTf}
        required
        onChange={handlePassword}
        value={password}
        label="Password"
        variant="standard"
        fullWidth
      />
      <Button
        className={classes.loginBtn}
        variant="contained"
        disabled={!validateForm()}
        onClick={login}
      >
        Login
      </Button>
    </Box>
  );
}
