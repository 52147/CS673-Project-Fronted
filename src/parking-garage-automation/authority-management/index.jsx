import React from 'react'
import { Autho } from './Autho';
import ListBar from "../listBar/listBar";
export const AuthoComponent = () => {
  return (
      <>
        <div className="row"></div>
        <div className="row">
          <div className="col-2">
            <ListBar active = "#Authority"></ListBar>
          </div>
          <div className="col-10 mt-2">
            <Autho/>
          </div>
        </div>
      </>
  )
}
export default AuthoComponent;