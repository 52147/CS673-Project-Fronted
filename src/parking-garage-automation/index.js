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
import AuthoComponent from "./authority-management";
import FeeComponent from "./garage-fee";
import GarageDataManagementComponent from "./garage-data-management";
import FormComponent from "./reservation";
import UserModuleComponent from "./user-module";
import ReserveTableComponent from "./client-reserve";

function ParkingGarageAutomation() {
    const [value, setValue] = useState('')
    let dom = (value) => {
        return (
            <Routes>
                <Route path="information/:plates" element={<ParkingInformationComponent />}/>
                <Route path="information" element={<ParkingInformationComponent />}/>
                <Route path="payment" element={<ParkingPaymentComponent/>}/>
                <Route path="payment/:plates" element={<ParkingPaymentComponent/>}/>
                <Route path="login" element={<LoginComponent/>}/>
                <Route path='/' exact element={<InputCarComponent/>}/>
                <Route path='/modules/garageData' exact element={<GarageDataComponent/>}/>
                <Route path="/modules" exact element={<ModulesComponent/>}/>
                <Route path="/modules/autho" exact element={<AuthoComponent/>}/>
                <Route path="/modules/fee" exact element={<FeeComponent/>}/>
                <Route path="/modules/garageDataManagement" exact element={<GarageDataManagementComponent/>}/>
                <Route path="/usermodule/form" element={<FormComponent/>}/>
                <Route path="usermodule" element={<UserModuleComponent/>}/>
                <Route path="/usermodule/reserveTable" element={<ReserveTableComponent/>}/>
            </Routes>
        )

    }
    return (
        <div className="row">
            <NavBarComponent valueChange={(e) => {
                setValue(e);
            }}></NavBarComponent>
            {dom(value)}
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default ParkingGarageAutomation;

