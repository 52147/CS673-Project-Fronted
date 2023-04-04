import ParkingInformation from "./parking-info";
import {useState} from "react";

const ParkingInformationComponent = ({setData}) => {


    return (
        <>
            <ParkingInformation setData = {setData}></ParkingInformation>
        </>
    )
}

export default ParkingInformationComponent;