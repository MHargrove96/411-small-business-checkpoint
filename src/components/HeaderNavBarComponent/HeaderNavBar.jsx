import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./HeaderNavBar.module.css";

const navigate = useNavigate();

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

const logout = () => {
  localStorage.removeItem("user");
  navigate("/");
};

export default function HeaderNavBar() {
  return (
    <Box className={classes.appBarBox}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <Button variant="text" color="inherit" component={Link} to="/">
            Listings
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
