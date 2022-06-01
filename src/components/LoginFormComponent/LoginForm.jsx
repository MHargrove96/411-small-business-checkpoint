import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button } from "@mui/material";

import classes from "./LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    navigate.push("/");
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
        type="submit"
        disabled={!validateForm()}
        onSubmit={login}
      >
        Login
      </Button>
    </Box>
  );
}
