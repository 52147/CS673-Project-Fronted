import React from "react";
import {GarageDataManagement} from "./GarageDataManagement";
import ListBar from "../listBar/listBar";
export const GarageDataManagementComponent = () => {
  return (
  <>
    <div className="row">
      <div className="col-2">
        <ListBar active="#Garage Data"></ListBar>
      </div>
      <div className="col-10 mt-2">
        <GarageDataManagement />
      </div>
    </div>
    </>
  );
};
export default GarageDataManagementComponent;
