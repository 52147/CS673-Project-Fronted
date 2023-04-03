import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {parkingRegisterThunk} from "../../services/registerThunk";
import styles from "../parking-register/register.module.css";
import {Button, Modal} from "react-bootstrap";
import $ from 'jquery';


const ParkingRegister = () => {
    const {loading, msg} = useSelector((state) => state.parkRegister)
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [securityAnswer1, setSecurityAnswer1] = useState('');
    let [securityAnswer2, setSecurityAnswer2] = useState('');

    const successHandler = () => {
        localStorage.removeItem('userObject');
        errorHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }
    const errorHandler = () => {
        localStorage.removeItem('userObject');
        errorHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }

    const [show, setShow] = useState(false);
    const errorHandlerClose = () => {
        setShow(false)
    };
    const errorHandlerShow = () => {
        setShow(true);
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
        dispatch(parkingRegisterThunk(newUser));
        resetFields();
        errorHandlerShow();

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

            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Log Out</Modal.Title>
                </Modal.Header>
                <Modal.Body> Log Out Successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={errorHandlerClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ParkingRegister;