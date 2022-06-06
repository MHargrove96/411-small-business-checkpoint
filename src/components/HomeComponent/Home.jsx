import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fetchbusinessesData } from "../../redux/business-actions";
import { businessActions } from "../../redux/business-slice";
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
import { red } from "@mui/material/colors";

export default function Home() {
  const { businesses } = useSelector((state) => {
    return state.businesses;
  });

  const { online } = useSelector((state) => {
    return state.online;
  });

  const dispatch = useDispatch();

  const removeBusiness = (e, id) => {
    dispatch(businessActions.removeBusiness(id));
  };

  return (
    <TableContainer className={classes.tblContainer}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.business_TBL}
      >
        <TableHead className={classes.business_TblHead}>
          <TableRow className={classes.tblHead_Row}>
            <TableCell className={classes.tblHeadCell_Name}>Name</TableCell>
            <TableCell className={classes.tblHeadCell_Description} align="left">
              Description
            </TableCell>
            <TableCell className={classes.tblHeadCell_Hours} align="right">
              Hours
            </TableCell>
            <TableCell className={classes.tblHeadCell_Address} align="right">
              Address
            </TableCell>
            {online && (
              <TableCell className={classes.tblHeadCell_Delete} align="right">
                Delete
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tblBody}>
          {businesses.map((listItem) => (
            <TableRow
              key={listItem.id}
              className={classes.tblBody_Row}
            >
              <TableCell component="th" scope="row">
                <Button id={classes.businessName_P} className={classes.tblBody_Text} component={Link} to={`/business/${listItem.id}`}>
                  {listItem.name}
                </Button>
              </TableCell>
              <TableCell align="left">{listItem.description}</TableCell>
              <TableCell align="right">{listItem.hours}</TableCell>
              <TableCell align="right" id={classes.addressText_Cell}>
                <p className={classes.tblBody_Text}>{listItem.address}</p>
                <p className={classes.tblBody_Text}>
                  {listItem.city}, {listItem.state}
                </p>
                <p className={classes.tblBody_Text}>{listItem.zip}</p>
              </TableCell>
              {online && (
                <TableCell align="right">
                  <DeleteIcon
                    className={classes.tblBody_Text}
                    id={classes.deleteIcon}
                    onClick={(e) => removeBusiness(e, listItem.id)}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
