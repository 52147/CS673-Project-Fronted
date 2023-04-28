import React from 'react'
import { ReserveManagement } from "./ReserveManagement";
import ListBar from "../listBar/listBar";

export const ReserveManagementComponent = () => {
  return (
    <>
    <div className="row"></div>
    <div className="row">
      <div className="col-2">
        <ListBar active = "#Reservation Data"></ListBar>
      </div>
      <div className="col-10 mt-2">
        <ReserveManagement/>
      </div>
    </div>
  </>
  )
}
export default ReserveManagementComponent;
