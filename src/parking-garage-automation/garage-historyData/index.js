import GarageData from "./garage-data";
import ListBar from "../listBar/listBar";
import NavBar from "../navBar/navBar";
import FooterComponent from "../footer";
import styles from "../parking-payment/parking-pay.module.css";
import {Form} from "react-bootstrap";
import React from "react";


const GarageDataComponent = () => {
    return (<>
            {/*<div className="row"><NavBar></NavBar></div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-6">*/}
            {/*        <ListBar></ListBar>*/}
            {/*    </div>*/}
            {/*    <div className="col-6">*/}
            {/*        <GarageData></GarageData>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <GarageData></GarageData>
        </>
    )
}

export default GarageDataComponent;
