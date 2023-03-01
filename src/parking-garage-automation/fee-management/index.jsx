import React from 'react'
import { Fee } from './Fee';
import NavBar from "../navBar/navBar";
import ListBar from "../listBar/listBar";
import GarageData from "../garage-historyData/garage-data";

export const FeeComponent = () => {
  return (
      <>
        <div className="row"></div>
        <div className="row">
          <div className="col-2">
            <ListBar></ListBar>
          </div>
          <div className="col-10 mt-2">
            <Fee/>
          </div>
        </div>

      </>

    // <Fee/>
  )
}
export default FeeComponent;