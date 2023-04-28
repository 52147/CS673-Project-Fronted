import GarageData from "./garage-data";
import ListBar from "../listBar/listBar";
import React from "react";


const GarageDataComponent = () => {
    return (<>
            <div className="row"></div>
            <div className="row">
                <div className="col-2">
                    <ListBar active = "#History Data"></ListBar>
                </div>
                <div className="col-10 mt-2" >
                    <GarageData></GarageData>
                </div>
            </div>
        </>
    )
}

export default GarageDataComponent;
