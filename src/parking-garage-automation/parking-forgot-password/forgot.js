import styles from "../parking-register/register.module.css";
import {Button, Modal, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {parkingRegisterThunk} from "../../services/registerThunk";
import {useDispatch} from "react-redux";
import $ from "jquery";


const ForgotPassword = () => {

    const data = [
        {
            id: "1",
            question: "What is your mother's maiden name?",
        }, {
            id: "2",
            question: "What is your favorite color?",
        }, {
            id: "3",
            question: "What was the name of your first pet?",
        }, {
            id: "4",
            question: "In what city were you born?",
        }, {
            id: "5",
            question: "What is the name of your favorite teacher?",
        }, {
            id: "6",
            question: "What is the name of the street you grew up on?",
        }, {
            id: "7",
            question: "What was your first car?",
        },{
            id: "8",
            question: "What is the name of your favorite sports team?",
        },{
            id: "9",
            question: "What was your high school mascot?",
        },{
            id: "10",
            question: "What is your favorite book?",
        },
    ];

    const navigate = useNavigate()
    const navHome = () => {
        navigate('/');
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
        // (parkingRegisterThunk(newUser));
        // if (msg == 'success') {
        //     successHandlerShow();
        //     setTimeout(() => window.location.replace(`/`), 3000)
        // } else {
        //     errorHandlerShow();
        //     setTimeout((event) => setErrorShow(false), 3000)
        // }


    }
    const errorHandler = () => {
        errorHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }


    const dispatch = useDispatch();
    const signUpClickHandler = () => {
        // let sq1 = $('#securityQuestion1').val();
        // let sq2 = $('#securityQuestion2').val();
        // const newUser = {
        //     username: userName,
        //     password: password,
        //     Email: email,
        //     Address: address,
        //     PhoneNumber: phoneNumber,
        //     Sq1: sq1,
        //     A1: securityAnswer1,
        //     Sq2: sq2,
        //     A2: securityAnswer2
        // }
        // console.log(newUser);
        //
        // resetFields();
        // successHandler(newUser);

    }


    return (<>
        <h1 className="mt-5 text-white">
            Please Answer Security Question
        </h1>


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
                {/*<input value={securityAnswer1} onChange={(event) => setSecurityAnswer1(event.target.value)}*/}
                {/*       className="form-control"/>*/}
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
                {/*<input value={securityAnswer2} onChange={(event) => setSecurityAnswer2(event.target.value)}*/}
                {/*       className="form-control"/>*/}
            </div>
        </div>

        <Button className={`mt-5  container ${styles.submitButton}`} onClick={signUpClickHandler}
                variant="warning">Submit</Button>
        {/*<Nav.Link className={`mt-4 text-white`} onClick={navForgotPassword}>forgot password?</Nav.Link>*/}

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
    </>)

}

export default ForgotPassword;