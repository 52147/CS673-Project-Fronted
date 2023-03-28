import { React, useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormThunk } from "../../services/formThunk";
export const ReserveTable = () => {
  const dispatch = useDispatch();

  const { history } = useSelector((state) => state.updateForm);
  useEffect(() => {
    console.log("Fetching history...");
    dispatch(FormThunk());
  }, [dispatch]);
  console.log(history);
  return <div>ReserveTable</div>;
};
