import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";

import classes from "./UserNameBar.module.css";
 

export default function UserNameBar() {
  const { online } = useSelector((state) => {
    return state
  })
  useEffect(() => {
    console.log(online)
  },[])
  return (
    <div className={classes.userNameContainer}>
      <h4 className={classes.userNameDisplay}>Logged in as: {online.username}</h4>
    </div>
  );
}