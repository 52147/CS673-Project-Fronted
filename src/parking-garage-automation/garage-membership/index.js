import React from "react";
import ParkingMembershipRecord from "./ParkingMembershipRecord";
import ListBar from "../listBar/listBar";
import GarageData from "../garage-historyData/garage-data";



const ParkingMembershipRecordComponent = () => {
    return(
        <>
            <div className="row"></div>
            <div className="row">
                <div className="col-2">
                    <ListBar active = "#MembershipRecords"></ListBar>
                </div>
                <div className="col-10 mt-2" >
                    <ParkingMembershipRecord></ParkingMembershipRecord>
                </div>
            </div>
        </>

    )

}

export default ParkingMembershipRecordComponent;