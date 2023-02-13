import ParkingInformationComponent from "./parking-information";
import {Route, Routes} from "react-router";
import ParkingPaymentComponent from "./parking-payment";
import {InputCar} from "./InputCar/InputCar";


function ParkingGarageAutomation(){
    return (
        <Routes>
            <Route path="information" element={<ParkingInformationComponent/>}/>
            <Route path="payment" element={<ParkingPaymentComponent/>}/>
            <Route path='/' exact element={<InputCar />} />
        </Routes>
    )

}

export default ParkingGarageAutomation;