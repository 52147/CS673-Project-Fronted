import ParkingInformationComponent from "./parking-information";
import { Route, Routes } from "react-router";
import ParkingPaymentComponent from "./parking-payment";
import InputCarComponent from "./InputCar";
import LoginComponent from "./login";

function ParkingGarageAutomation() {
    return (
        <Routes>
            <Route path="information" element={<ParkingInformationComponent />} />
            <Route path="payment" element={<ParkingPaymentComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path='/' exact element={<InputCarComponent />} />
        </Routes>
    )
}

export default ParkingGarageAutomation;