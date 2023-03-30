import React from "react";
import { ReserveForm } from "./Form";
export const FormComponent = ({setData}) => {
  return (
    <>
      <ReserveForm setData = {setData}/>
    </>
  );
};
export default FormComponent;
