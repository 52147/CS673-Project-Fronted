import React from 'react'
import { Fee } from './Fee';

export const FeeComponent = () => {
  return (
    <>
            <div className="row"></div>
            <div className="row">
                <div className="col-2">
                    <ListBar></ListBar>
                </div>
                <div className="col-10">
                    <Fee></Fee>
                </div>
            </div>

        </>
    //<Fee/>
  )
}
export default FeeComponent;