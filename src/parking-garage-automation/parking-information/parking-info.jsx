import { Button } from "react-bootstrap";
import styles from './parking-info.module.css'

const ParkingInformation = () => {
    const payButtonClickHandler = () => {

    }

    return (<>
        <div className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col text-white">
                        <h1>Parking Information</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-white text-right">
                        <h3>Plate Number:</h3>
                    </div>
                    <div className="col-6 text-white text-left">
                        <h3>XXXXXX</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-white text-right">
                        <h3>Parking Location:</h3>
                    </div>
                    <div className="col-6 text-white text-left">
                        <h3>Boston</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-white text-right">
                        <h3>Enter Time:</h3>
                    </div>
                    <div className="col-6 text-white text-left">
                        <h3>2023-01-01 19:00:00</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 text-white text-right">
                        <h3>Departure Time:</h3>
                    </div>
                    <div className="col-6 text-white text-left">
                        <h3>2023-01-01 20:30:00</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 text-white text-right">
                        <h3>Total Parking Time:</h3>
                    </div>
                    <div className="col-6 text-white text-left">
                        <h3>1 hour 30 minutes</h3>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-6 text-white text-right`}>
                        <h3>Parking Fee:</h3>
                    </div>
                    <div className={`col-6 text-white text-left`}>
                        <h3>10.00 USD</h3>
                    </div>
                </div>

            </div>
            <Button className={`mt-3 ${styles.payButton}`} onClick={payButtonClickHandler} variant="warning">Pay</Button>
        </div>
    </>
    )
}


export default ParkingInformation;