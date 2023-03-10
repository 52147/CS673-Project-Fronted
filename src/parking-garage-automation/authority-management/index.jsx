import React from 'react'
import { Autho } from './Autho';
export const AuthoComponent = () => {
  return (
    <>
            <div className="row"></div>
            <div className="row">
                <div className="col-2">
                    <ListBar></ListBar>
                </div>
                <div className="col-10">
                    <Autho></Autho>
                </div>
            </div>

        </>
    //<Autho/>
  )
}
export default AuthoComponent;