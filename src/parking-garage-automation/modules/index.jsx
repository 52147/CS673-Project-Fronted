import React from "react";
import { Modules } from "./Modules";
import NavBarComponent from "../navBar";
import FooterComponent from "../footer";
export const ModulesComponent = () => {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <Modules />
      <FooterComponent />
    </>
  );
};
export default ModulesComponent;
