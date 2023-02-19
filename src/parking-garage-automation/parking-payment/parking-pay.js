import {Button,Form} from "react-bootstrap";
import {useState} from "react";
import styles from './parking-pay.module.css'

const ParkingPayment = () =>{
    let [credit, setCredit] = useState(1);

    const creditPayClickHandler = () =>{
        setCredit(1)
    }
    const debitPayClickHandler = () =>{
        setCredit(0)
    }

    const payButtonClickHandler = () =>{

    }


    return(<>
            <div className={styles.backG} >
                <div className="container">
                    <div className="row mt-5">
                        <div className="col text-white">
                            <h1>Payment</h1>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className={`col-6 text-white ${styles.textRight}`}>
                            <Button  onClick={creditPayClickHandler} variant="light">Use Credit Card Pay</Button>
                        </div>
                        <div className={`col-6 text-white ${styles.textLeft}`}>
                            <Button  onClick={debitPayClickHandler} variant="light">Use Debit Card Pay</Button>

                        </div>
                    </div>


                    {
                        credit == 0 && <div>
                            debit
                        </div>
                    }
                    {
                        credit == 1 && <div>
                            <div className="row mt-3">

                                <Form>
                                    <Form.Group controlId="FirstName">
                                        <div className="row">
                                            <div className={`col-5 text-white ${styles.textRight}`}>
                                                <h3>First Name: </h3>
                                            </div>
                                            <div className={`col-5 text-white  ${styles.textLeft}`}>
                                                <Form.Control type="FirstName" placeholder="Enter First Name" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="LastName">
                                        <div className="row">
                                            <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                                <h3>Last Name: </h3>
                                            </div>
                                            <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                                <Form.Control type="LastName" placeholder="Enter Last Name" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="Email">
                                        <div className="row">
                                            <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                                <h3>Email Address: </h3>
                                            </div>
                                            <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                                <Form.Control type="Email" placeholder="Enter Email Address" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="CardNumber">
                                        <div className="row">
                                            <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                                <h3>Card Number: </h3>
                                            </div>
                                            <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                                <Form.Control type="CardNumber" placeholder="Enter Card Number" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="ExpirationDate">
                                        <div className="row">
                                            <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                                <h3>Expiration Date: </h3>
                                            </div>
                                            <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                                <Form.Control type="ExpirationDate" placeholder="Enter Expiration Date" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="CVC">
                                        <div className="row">
                                            <div className={`col-5 text-white mt-1 ${styles.textRight}`}>
                                                <h3>CVC: </h3>
                                            </div>
                                            <div className={`col-5 text-white mt-1 ${styles.textLeft}`}>
                                                <Form.Control type="CVC" placeholder="Enter CVC" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                </Form>


                            </div>

                        </div>
                    }

                </div>

                <Button className={`mt-3 ${styles.payButton}`} onClick={payButtonClickHandler} variant="warning">Pay</Button>

            </div>


        </>
    )
}


export default ParkingPayment;