import ParkingInformationComponent from "./parking-information";
import {Route, Routes} from "react-router";
import ParkingPaymentComponent from "./parking-payment";
import {InputCar} from "./InputCar/InputCar";
import GarageDataComponent from "./garage-data";



function ParkingGarageAutomation(){
    return (
        <Routes>
            <Route path="information" element={<ParkingInformationComponent/>}/>
            <Route path="payment" element={<ParkingPaymentComponent/>}/>
            <Route path='/' exact element={<InputCar />} />
            <Route path='/garageData' exact element={<GarageDataComponent/>} />
        </Routes>
    )

}

export default ParkingGarageAutomation;