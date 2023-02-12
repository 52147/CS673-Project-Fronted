import ParkingInformationComponent from "./parking-information";



import {Route, Routes} from "react-router";
import ParkingPaymentComponent from "./parking-payment";


function ParkingGarageAutomation(){
    return (
        <Routes>
            <Route path="information" element={<ParkingInformationComponent/>}/>
            <Route path="payment" element={<ParkingPaymentComponent/>}/>
        </Routes>
    )

}

export default ParkingGarageAutomation;