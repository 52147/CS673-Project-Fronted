import {Button, Form, Modal, Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from './parking-pay.module.css'
import {useDispatch, useSelector} from "react-redux";
import zelleImg from '../../image/zelleImg.jpeg'
import {useNavigate} from "react-router";
import {checkOutCarThunk} from "../../services/checkOutCarThunk";
import {getFeeThunk} from "../../services/feeManagementThunk";
import {safeFormThunk} from "../../services/formThunk";
import {purchaseMembershipThunk} from "../../services/membershipThunk";


const ParkingPayment = ({data}) => {
    //console.log(data)
    const {
        loading,
        firstHour,
        firstFee,
        secondFee,
        maxFee,
    } = useSelector((state) => state.parkFee)

    const {
        PlateNumber,
        DepartureTime,
        TotalParkingTime,
        ParkingFee,
    } = useSelector((state) => state.parkInfo)

    let [credit, setCredit] = useState(0);
    const cashPayClickHandler = () => {
        setCredit(0)
    }
    const onlinePayClickHandler = () => {
        setCredit(1)
    }

    const zellePayClickHandler = () => {
        setCredit(2)
    }


    const [show, setShow] = useState(false);
    const payButtonClickHandlerClose = () => setShow(false);
    const payButtonClickHandlerShow = async () => {
        setShow(true);
        if (data.from === "parkInfo") {
            const payInfo = {
                plate: PlateNumber,
                exit: DepartureTime,
                parkingFee: ParkingFee,
                totalParkingTime: TotalParkingTime
            }
            dispatch(checkOutCarThunk(payInfo));

        } else if (data.from === 'reservation') {
            dispatch(safeFormThunk(data))
        }
        else if(data.from === 'membership'){
            dispatch(purchaseMembershipThunk(data))
        }
        //setTimeout(() => navigate('/'), 3000)
    }

    const navigate = useNavigate()
    const navHome = () => {
        navigate('/');
    }


    let [fee, setFee] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (data.from === "parkInfo") {
          setFee(ParkingFee);
          console.log(ParkingFee);
        } else if (data.from === "reservation") {
          async function fetchData() {
            const carType = data.withCarType?.type;
            if (carType) {
              await dispatch(getFeeThunk({ carType }));
              if (data.hour <= firstHour) {
                setFee(data.hour * firstFee);
              } else {
                setFee(Math.max(firstHour * firstFee + (data.hour - firstHour) * secondFee, maxFee));
              }
            } else {
              // handle null case
            }
          }
          fetchData();
        } else if (data.from === "membership") {
          setFee(data.price);
          console.log(ParkingFee);
        }
      }, [data.withCarType?.type,ParkingFee, data.from, data.hour, data.price, dispatch, firstFee, firstHour, maxFee, secondFee]);
      
      
      
      
      

    return (<>
            {
                data === '' &&
                <h1 className="mt-5 text-white">Error, Please Try Again!</h1>
            }
            {
                data !== '' && loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </Spinner>
            }
            {
                data !== '' && !loading &&
                <div className="container">
                    <div className="row mt-5">
                        <div className={`col-6 text-white ${styles.textRight}`}>
                            <h1>Parking Fee:</h1>
                        </div>
                        <div className={`col-6 text-white ${styles.textLeft}`}>
                            <h1>{fee} USD</h1>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className={` text-white `}>
                            <Button className={`mr-3 ${styles.buttonWidth}`} onClick={cashPayClickHandler} variant="light">Pay
                                with Cash/Card</Button>
                            <Button className={`mr-3 ${styles.buttonWidth}`} onClick={onlinePayClickHandler}
                                    variant="light"> Pay Online </Button>
                            <Button className={` ${styles.buttonWidth}`} onClick={zellePayClickHandler} variant="light">Pay
                                with Zelle</Button>
                        </div>
                    </div>

                    {
                        credit === 0 && <div>
                            <br/>
                            <br/>
                        </div>
                    }
                    {
                        credit === 1 &&
                        <Form className="mt-3">
                            <Form.Group controlId="FirstName">
                                <div className="row">
                                    <div className={`col-5 text-white ${styles.textRight}`}>
                                        <h3>First Name: </h3>
                                    </div>
                                    <div className={`col-5 text-white  ${styles.textLeft}`}>
                                        <Form.Control type="FirstName" placeholder="Enter First Name"/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="LastName">
                                <div className="row">
                                    <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                        <h3>Last Name: </h3>
                                    </div>
                                    <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                        <Form.Control type="LastName" placeholder="Enter Last Name"/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <div className="row">
                                    <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                        <h3>Email Address: </h3>
                                    </div>
                                    <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                        <Form.Control type="Email" placeholder="Enter Email Address"/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="CardNumber">
                                <div className="row">
                                    <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                        <h3>Card Number: </h3>
                                    </div>
                                    <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                        <Form.Control type="CardNumber" placeholder="Enter Card Number"/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="ExpirationDate">
                                <div className="row">
                                    <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                        <h3>Expiration Date: </h3>
                                    </div>
                                    <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                        <Form.Control type="ExpirationDate" placeholder="Enter Expiration Date"/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="CVC">
                                <div className="row">
                                    <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                        <h3>CVC: </h3>
                                    </div>
                                    <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                        <Form.Control type="CVC" placeholder="Enter CVC"/>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>


                    }{
                    credit === 2 && <div className={` mt-3 ${styles.content}`}>
                        <img src={zelleImg} height={250} width={250} alt=''/>
                    </div>
                }


                    <Button className={`mt-3 ${styles.payButton}`} onClick={payButtonClickHandlerShow}
                            variant="warning">Pay</Button>

                    <Modal
                        show={show}
                        onHide={payButtonClickHandlerClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> Pay successfully! Thank you!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={navHome}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            }

            {/*</div>*/}


        </>
    )
}


export default ParkingPayment;