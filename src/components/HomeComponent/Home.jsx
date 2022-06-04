import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchbusinessesData } from "../../redux/business-actions";
import { businessActions } from "../../redux/business-slice";
import { auth } from "../ProtectedRoutes/ProtectedRoutes";
import { userActions } from "../../redux/user-slice";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "./Home.module.css";

export default function Home() {
  const { businesses } = useSelector((state) => {
    return state.businesses;
  });

  const { online } = useSelector((state) => {
    return state.online;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (businesses.length === 0) {
      dispatch(fetchbusinessesData());
    }
    console.log(online, 'online state homecomponent')
  }, [dispatch, businesses, online]);

  const removeBusiness = (e, id) => {
    dispatch(businessActions.removeBusiness(id));
  };

  return (
    <TableContainer component={Paper} className={classes.tblContainer}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.business_TBL}
      >
        <TableHead className={classes.business_TblHead}>
          <TableRow>
            <TableCell className={classes.tblCell_Name}>Name</TableCell>
            <TableCell className={classes.tblCell_Description} align="left">
              Description
            </TableCell>
            <TableCell className={classes.tblCell_Hours} align="right">
              Hours
            </TableCell>
            <TableCell className={classes.tblCell_Address} align="right">
              Address
            </TableCell>
            {online && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {businesses.map((listItem) => (
            <TableRow key={listItem.id}>
              <TableCell component="th" scope="row">
                <Button component={Link} to={`/business/${listItem.id}`}>
                  {listItem.name}
                </Button>
              </TableCell>
              <TableCell align="left">{listItem.description}</TableCell>
              <TableCell align="right">{listItem.hours}</TableCell>
              <TableCell align="right">{listItem.address}</TableCell>
              {online && (
                <TableCell align="right">
                  <DeleteIcon onClick={(e) => removeBusiness(e, listItem.id)} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
