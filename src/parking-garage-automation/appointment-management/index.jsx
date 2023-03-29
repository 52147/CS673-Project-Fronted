import React from 'react'
import { Appointment } from './Appointment';
import ListBar from "../listBar/listBar";
export const AppointmentComponent = () => {
  return (
      <>
        <div className="row"></div>
        <div className="row">
          <div className="col-2">
            <ListBar active = "#Appointment"></ListBar>
          </div>
          <div className="col-10 mt-2">
            <Appointment/>
          </div>
        </div>
      </>
  )
}
export default AppointmentComponent;