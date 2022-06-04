import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";

import classes from "./HeaderNavBar.module.css";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export default function HeaderNavBar() {
  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { online } = useSelector((state) => {
    return state.online;
  });

  const logout = () => {
    dispatch(userActions.logout());
    localStorage.removeItem("user");
    navigate("/");
  };

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
          {!online && (
            <>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </>
          )}
          {online && (
            <>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to="/add-business"
              >
                Add Business
              </Button>
              <Button variant="text" color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
