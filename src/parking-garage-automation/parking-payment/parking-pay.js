import {Button,Form} from "react-bootstrap";
import './index.css'
import {useState} from "react";

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
            <div className="backG">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col text-white">
                            <h1>Payment</h1>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6 text-white textRight">
                            <Button  onClick={creditPayClickHandler} variant="light">Use Credit Card Pay</Button>
                        </div>
                        <div className="col-6  text-white textLeft">
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
                            <div className="row mt-5">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <div className="row">
                                            <div className="col-5 text-white textRight">
                                                First Name:
                                            </div>
                                            <div className="col-5  text-white textLeft">
                                                <Form.Control type="email" placeholder="First Name" />
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <div className="row">
                                            <div className="col-5 mt-3 text-white textRight">
                                                Last Name:
                                            </div>
                                            <div className="col-5  mt-3 text-white textLeft">
                                                <Form.Control type="email" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form>


                            </div>
                        </div>
                    }


                    <br/>
                    <br/>


                </div>

                <Button id="payButton" onClick={payButtonClickHandler} variant="warning">Pay</Button>
            </div>

        </>
    )
}


export default ParkingPayment;