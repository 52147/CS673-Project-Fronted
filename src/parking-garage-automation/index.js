import ParkingInformationComponent from "./parking-information";
import { Route, Routes } from "react-router";
import ParkingPaymentComponent from "./parking-payment";
import InputCarComponent from "./InputCar";
import LoginComponent from "./login";
import GarageDataComponent from "./garage-data";
import ModulesComponent from "./modules";

function ParkingGarageAutomation() {
  return (
    <Routes>
      <Route path="information" element={<ParkingInformationComponent />} />
      <Route path="payment" element={<ParkingPaymentComponent />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="/" exact element={<InputCarComponent />} />
      <Route path="/garageData" exact element={<GarageDataComponent />} />
      <Route path="/modules" exact element={<ModulesComponent />} />
    </Routes>
  );
}

export default ParkingGarageAutomation;
