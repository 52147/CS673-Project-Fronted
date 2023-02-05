import ParkingInformationComponent from "./parking-information";
import {Route, Routes} from "react-router";


function ParkingGarageAutomation(){
    return (
        <Routes>
            <Route path="information" element={<ParkingInformationComponent/>}/>
        </Routes>
    )

}

export default ParkingGarageAutomation;