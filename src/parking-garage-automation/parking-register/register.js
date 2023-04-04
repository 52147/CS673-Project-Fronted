import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {parkingRegisterThunk} from "../../services/registerThunk";
import styles from "../parking-register/register.module.css";
import {Button, Modal, Nav} from "react-bootstrap";
import $ from 'jquery';
import {useNavigate} from "react-router";


const ParkingRegister = () => {
    const {loading, msg} = useSelector((state) => state.parkRegister)
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [securityAnswer1, setSecurityAnswer1] = useState('');
    let [securityAnswer2, setSecurityAnswer2] = useState('');

    const navigate = useNavigate()
    const navHome = () => {
        navigate('/');
    }
    const navForgotPassword = () => {
        navigate('/forget');
    }

    const [errorShow, setErrorShow] = useState(false);
    const errorHandlerClose = () => {
        setErrorShow(false)
    };
    const errorHandlerShow = () => {
        setErrorShow(true);
    }

    const [successShow, setSuccessShow] = useState(false);
    const successHandlerClose = () => {
        setSuccessShow(false)
    };
    const successHandlerShow = () => {
        setSuccessShow(true);
    }


    const successHandler = (newUser) => {
        (parkingRegisterThunk(newUser));
        if(msg == 'success'){
            successHandlerShow();
            setTimeout(() => window.location.replace(`/`), 3000)
        }else{
            errorHandlerShow();
            setTimeout((event) => setErrorShow(false), 3000)
        }


    }
    const errorHandler = () => {
        errorHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }


    const dispatch = useDispatch();
    const signUpClickHandler = () => {
        let sq1 = $('#securityQuestion1').val();
        let sq2 = $('#securityQuestion2').val();
        const newUser = {
            username: userName,
            password: password,
            Email: email,
            Address: address,
            PhoneNumber: phoneNumber,
            Sq1 : sq1,
            A1: securityAnswer1,
            Sq2 : sq2,
            A2 : securityAnswer2
        }
        console.log(newUser);

        resetFields();
        successHandler(newUser);

    }
    const resetFields = () => {
        setUserName('');
        setPassword('');
        setEmail('');
        setAddress('');
        setPhoneNumber('');
    }

    return (<>
            <h1 className="mt-5 text-white">
                Sign up your account!
            </h1>

            <div className="row mt-5">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    UserName:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={userName} onChange={(event) => setUserName(event.target.value)}
                           className="form-control" type="text"/>
                </div>

                <div className={`col-1 mt-1 text-white ${styles.textRight}`}>
                    Password:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={password} onChange={(event) => setPassword(event.target.value)}
                           className="form-control" type="password"/>
                </div>
            </div>


            <div className="row mt-3">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Phone Number:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}
                           className="form-control" type="tel"/>
                </div>

                <div className={`col-1 mt-1 text-white ${styles.textRight}`}>
                    Email:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} className="form-control"
                           type="email"/>
                </div>
            </div>

            <div className="row mt-3 ">
                <div className={`col-4 text-white ${styles.textRight}`}>
                    Address:
                </div>
                <div className={`col-3 ${styles.textLeft}`}>
                     <textarea value={address} onChange={(event) => setAddress(event.target.value)}
                               className="form-control border-1">
                    </textarea>
                </div>
            </div>

            <div className="row mt-5">
                <div className={`col-4 text-white ${styles.textRight}`}>
                    Security Question 1:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <select name="securityQuestion1" id="securityQuestion1">
                        <option value="0">--Please select--</option>
                        <option value="1">What is your mother's maiden name?</option>
                        <option value="2">What is your favorite color?</option>
                        <option value="3">What was the name of your first pet?</option>
                        <option value="4">In what city were you born?</option>
                        <option value="5">What is the name of your favorite teacher?</option>
                        <option value="6">What is the name of the street you grew up on?</option>
                        <option value="7">What was your first car?</option>
                        <option value="8">What is the name of your favorite sports team?</option>
                        <option value="9">What was your high school mascot?</option>
                        <option value="10">What is your favorite book?</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Answer:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <input value={securityAnswer1} onChange={(event) => setSecurityAnswer1(event.target.value)}
                           className="form-control"/>
                </div>
            </div>

            <div className="row mt-5">
                <div className={`col-4 text-white ${styles.textRight}`}>
                    Security Question 2:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <select name="securityQuestion2" id="securityQuestion2">
                        <option value="0">--Please select--</option>
                        <option value="1">What is your mother's maiden name?</option>
                        <option value="2">What is your favorite color?</option>
                        <option value="3">What was the name of your first pet?</option>
                        <option value="4">In what city were you born?</option>
                        <option value="5">What is the name of your favorite teacher?</option>
                        <option value="6">What is the name of the street you grew up on?</option>
                        <option value="7">What was your first car?</option>
                        <option value="8">What is the name of your favorite sports team?</option>
                        <option value="9">What was your high school mascot?</option>
                        <option value="10">What is your favorite book?</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Answer:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <input value={securityAnswer2} onChange={(event) => setSecurityAnswer2(event.target.value)}
                           className="form-control"/>
                </div>
            </div>

            <Button className={`mt-5  container ${styles.submitButton}`} onClick={signUpClickHandler}
                    variant="warning">Submit</Button>
            <Nav.Link className={`mt-4 text-white`} onClick={navForgotPassword}>forgot password?</Nav.Link>

            <Modal
                show={errorShow}
                onHide={(event) => setErrorShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body> Have problem, Please try again!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={(event) => setErrorShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={successShow}
                onHide={navHome}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body> Sign up Successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={navHome}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ParkingRegister;