import NavBarComponent from "../navBar";
import ParkingPayment from "./parking-pay";
import { FooterComponent } from '../footer/index';

const ParkingPaymentComponent = () => {
    return (
    <>
        <NavBarComponent></NavBarComponent>
        <ParkingPayment></ParkingPayment>
        <FooterComponent />
    </>
    )
}


export default ParkingPaymentComponent;