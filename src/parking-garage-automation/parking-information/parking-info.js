import {Button, Spinner} from "react-bootstrap";
import styles from './parking-info.module.css'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getParkingInfoThunk} from "../../services/parkInfoThunk";
import {useParams} from "react-router-dom";
import '../../parking-garage-automation/parking-information/parkinginfoMock'




const ParkingInformation = ({setData}) => {
    const {plates} = useParams();

    const {
        loading,
        PlateNumber,
        EnterTime,
        DepartureTime,
        TotalParkingTime,
        ParkingFee,
        msg
    } = useSelector((state) => state.parkInfo)
    //console.log(PlateNumber);

    const parkInfo = {
        plate: plates
    }

    const payButtonClickHandler = () => {
        const payInfo=
        {
            from:"parkInfo",
        }
        //console.log(payInfo)
        setData(payInfo)
        navigate(`/payment`)
    }

    const navigate = useNavigate()
    const navHome = () => {
        navigate('/');
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getParkingInfoThunk(parkInfo))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setTimeout(() => navigate('/'), 15000)
    }, []);


    return (<>
            <div className={styles.backG}>
                {msg === 'fail' &&
                    <div className="row mt-5 text-white">
                        <h1>{plates} Dose Not Exist.</h1>
                    </div>
                }
                {
                    msg === 'success' && loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden mt-5">Loading...</span>
                    </Spinner>
                }
                {
                    msg === 'success' && !loading && <div className="container">

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
                                <h3>{Math.round(TotalParkingTime/60)} hour {TotalParkingTime%60} min</h3>
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


            </div>
        </>
    )
}


export default ParkingInformation;