import React from 'react'
import ListBar from "../listBar/listBar";
import ParkingFee from "./parkingFee";

export const FeeComponent = () => {
  return (
      <>
        <div className="row"></div>
        <div className="row">
          <div className="col-2">
            <ListBar active = "#fee"></ListBar>
          </div>
          <div className="col-10 mt-2">
            <ParkingFee></ParkingFee>
          </div>
        </div>

      </>

  )
}
export default FeeComponent;