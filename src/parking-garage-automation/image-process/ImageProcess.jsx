import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { imageProcessCarThunk } from "../../services/imageProcessThunk";

export const ImageProcess = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(imageProcessCarThunk());
  };

  return (
    <>
      <div>
        <Button onClick={handleClick}>Process Image</Button>
      </div>
    </>
  );
};
