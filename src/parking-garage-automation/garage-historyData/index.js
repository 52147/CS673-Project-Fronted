import GarageData from "./garage-data";
import ListBar from "../listBar/listBar";
import NavBar from "../navBar/navBar";
import FooterComponent from "../footer";
import styles from "../parking-payment/parking-pay.module.css";
import {Form} from "react-bootstrap";
import React from "react";


const GarageDataComponent = () => {
    return (<>
            <div className="row"></div>
            <div className="row">
                <div className="col-2">
                    <ListBar></ListBar>
                </div>
                <div className="col-10">
                    <GarageData></GarageData>
                </div>
            </div>

            {/* <GarageData></GarageData> */}
        </>
    )
}

export default GarageDataComponent;
