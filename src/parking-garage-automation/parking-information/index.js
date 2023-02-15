import ParkingInformation from "./parking-info";
import NavBarComponent from "../navBar";
import { FooterComponent } from '../footer/index';

const ParkingInformationComponent = () => {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <ParkingInformation></ParkingInformation>
            <FooterComponent />
        </>
    )
}

export default ParkingInformationComponent;