import ParkingInformationComponent from "./parking-information";

import {Route, Routes} from "react-router";
import ParkingPaymentComponent from "./parking-payment";
import InputCarComponent from "./InputCar";
import LoginComponent from "./login";
import GarageDataComponent from "./garage-historyData";
import {useState} from "react";
import FooterComponent from "./footer";
import NavBarComponent from "./navBar";
import ModulesComponent from "./modules";

function ParkingGarageAutomation() {
    // const [value, setValue] = useState('')
    // let dom = (value) => {
        return (
            <Routes>
                <Route path="information" element={<ParkingInformationComponent/>}/>
                <Route path="payment" element={<ParkingPaymentComponent/>}/>
                <Route path="login" element={<LoginComponent/>}/>
                <Route path='/' exact element={<InputCarComponent/>}/>
                <Route path='/garageData' exact element={<GarageDataComponent/>}/>
                <Route path="/modules" exact element={<ModulesComponent />} />
            </Routes>
        )

    // }
    // return (
    //     <div className="row">
    //         <NavBarComponent valueChange={(e) => {setValue(e);}}></NavBarComponent>
    //         {dom(value)}
    //         <FooterComponent></FooterComponent>
    //     </div>
    // );
}

export default ParkingGarageAutomation;

