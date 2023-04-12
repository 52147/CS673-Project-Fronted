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
    let [password2, setPassword2] = useState('');
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [securityAnswer1, setSecurityAnswer1] = useState('');
    let [securityAnswer2, setSecurityAnswer2] = useState('');
    const [formErrors, setFormErrors] = useState([]);

    const navigate = useNavigate()
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
        navigate('/');
        setSuccessShow(false)
    };
    const successHandlerShow = () => {
        setSuccessShow(true);
    }


    const successHandler = async (newUser) => {
        const msgg = await dispatch(parkingRegisterThunk(newUser));
        console.log(newUser)
        if (msgg.type === '/register/fulfilled') {
            resetFields();
            successHandlerShow();
            setTimeout(() => window.location.replace(`/`), 3000)
        } else {
            const errors = [];
            errors.push('Username or e-mail has exist.');
            setFormErrors(errors);

            errorHandlerShow();
            //setTimeout((event) => setErrorShow(false), 3000)
        }


    }


    const dispatch = useDispatch();
    const signUpClickHandler = async () => {
        let sq1 = $('#securityQuestion1').val();
        let sq2 = $('#securityQuestion2').val();

        const errors = [];

        if (!userName) {
            errors.push('Please enter a username.');
        }

        if (!email || !email.includes('@')) {
            errors.push('Please enter a valid email.');
        }

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        } else if (password !== password2) {
            errors.push('Passwords do not match.');
        }

        const regex = /^[0-9\b]+$/;
        if (!regex.test(phoneNumber) || phoneNumber.length !== 10) {
            errors.push('Please enter a valid phone number.');

        }

        if (!address) {
            errors.push('Please enter a valid address.');
        }

        if (sq1=='0' || sq2=='0') {
            errors.push('Please select security questions.');
        }else if(sq1===sq2){
            errors.push('Please select different security questions.');
        }

        if (!securityAnswer1 || !securityAnswer2) {
            errors.push('Please enter security answers.');
        }else if(securityAnswer1===securityAnswer2){
            errors.push('Please enter different security answers.');
        }

        setFormErrors(errors);

        if (errors.length === 0) {
            const newUser = {
                username: userName,
                password: password,
                email: email,
                address: address,
                phone: phoneNumber,
                q1: sq1,
                a1: securityAnswer1,
                q2: sq2,
                a2: securityAnswer2
            }
            await successHandler(newUser);
        } else {
            errorHandlerShow();
        }


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
                <div className={`col-4 mt-2 text-white ${styles.textRight}`}>
                    Username:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={userName} onChange={(event) => setUserName(event.target.value)}
                           className="form-control" type="username"/>
                </div>

                <div className={`col-1 mt-2 text-white ${styles.textRight}`}>
                    E-mail:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={email} onChange={(event) => setEmail(event.target.value)}
                           className="form-control" type="email"/>
                </div>
            </div>


            <div className="row mt-3">
                <div className={`col-4 mt-2 text-white ${styles.textRight}`}>
                    Password:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={password} onChange={(event) => setPassword(event.target.value)}
                           className="form-control" type="password"/>
                </div>

                <div className={`col-1 text-white ${styles.textRight}`}>
                    Confirm Password:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={password2} onChange={(event) => setPassword2(event.target.value)}
                           className="form-control"
                           type="password"/>
                </div>
            </div>

            <div className="row mt-3 ">
                <div className={`col-4 mt-2 text-white ${styles.textRight}`}>
                    Phone:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}
                           className="form-control" type="tel"/>
                </div>
                <div className={`col-1 mt-2 text-white ${styles.textRight}`}>
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
                onHide={errorHandlerClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formErrors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={errorHandlerClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={successShow}
                onHide={successHandlerClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body> Sign up Successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={successHandlerClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ParkingRegister;