import {Button, Spinner} from "react-bootstrap";
import styles from './parking-info.module.css'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getParkingInfoThunk} from "../../services/parkInfoThunk";
import {useParams} from "react-router-dom";

const ParkingInformation = (props) => {
    const {plates} = useParams();
    //console.log(plates)
    const {
        loading,
        PlateNumber,
        EnterTime,
        DepartureTime,
        TotalParkingTime,
        ParkingFee,
        msg
    } = useSelector((state) => state.parkInfo)

    const navigate = useNavigate()
    const payButtonClickHandler = () => {
        window.location.replace(`/payment/${plates}`)
    }

    const navHome = () => {

        navigate('/');


    }

    const dispatch = useDispatch();

    const parkInfo = {
        plate: plates
    }

    useEffect(() => {
        dispatch(getParkingInfoThunk(parkInfo))

    }, []);


    return (<>
            <div className={styles.backG}>
                {msg == 'fail' && <>
                    <div className="row mt-5">
                        <div className="col text-white">
                            <h1><div className="col text-white">
                                <h1>{plates} Dose Not Exist.</h1>
                            </div></h1>
                        </div>
                    </div>

                </>}
                {
                    msg == 'success' && !loading && <div className="container">

                        <div className="row mt-5">
                            <div className="col text-white">
                                <h1>Parking Information</h1>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Plate Number:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>{PlateNumber}</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Parking Location:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>Boston</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Enter Time:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>{EnterTime}</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Exit Time:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>{DepartureTime}</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Total Parking Time:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>{TotalParkingTime}</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className={`col-6 text-white ${styles.textRight}`}>
                                <h3>Parking Fee:</h3>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <h3>{ParkingFee} USD</h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className={`col-6  ${styles.textRight}`}>
                                <Button className={`${styles.payButton}`} onClick={payButtonClickHandler}
                                        variant="warning">Pay</Button>
                            </div>
                            <div className={`col-6 text-white ${styles.textLeft}`}>
                                <Button className={`${styles.payButton}`} onClick={navHome}
                                        variant="secondary">Back</Button>
                            </div>
                        </div>
                    </div>
                }
                {
                    msg == 'success' && loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden mt-5">Loading...</span>
                    </Spinner>
                }

            </div>
        </>
    )
}


export default ParkingInformation;