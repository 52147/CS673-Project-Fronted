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
import ParkingRegisterComponent from "./parking-register";
import FormComponent from "./reservation";
import UserModuleComponent from "./user-module";
import ReserveTableComponent from "./client-reserve";
import ReserveManagement from "./reservation-management";
import AppointmentComponent from "./appointment-management";

function ParkingGarageAutomation() {
    const [value, setValue] = useState('')
    const [data, setData] = useState('')
    console.log(data);

    let dom = (value) => {
        return (
            <Routes>
                <Route path="information/:plates" element={<ParkingInformationComponent setData = {setData}/>}/>
                <Route path="information" element={<ParkingInformationComponent setData = {setData}/>}/>
                <Route path="payment" element={<ParkingPaymentComponent data = {data}/>}/>
                <Route path="login" element={<LoginComponent/>}/>
                <Route path='/' exact element={<InputCarComponent/>}/>
                <Route path='/modules/garageData' exact element={<GarageDataComponent/>}/>
                <Route path="/modules" exact element={<ModulesComponent/>}/>
                <Route path="/modules/autho" exact element={<AuthoComponent/>}/>
                <Route path="/modules/fee" exact element={<FeeComponent/>}/>
                <Route path="/modules/garageDataManagement" exact element={<GarageDataManagementComponent/>}/>
                <Route path="/usermodule/form" element={<FormComponent setData = {setData}/>}/>
                <Route path="usermodule" element={<UserModuleComponent/>}/>
                <Route path="/register" exact element={<ParkingRegisterComponent/>}/>
                <Route path="/usermodule/reserveTable" element={<ReserveTableComponent/>}/>
                <Route path="/modules/reservemanagement" element={<ReserveManagement/>}/>
                <Route path="/modules/appointmentmanagement" element={<AppointmentComponent/>}/>
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

