import styles from "./forgetP.module.css";
import {Alert, Button, Card, Modal, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {parkingRegisterThunk} from "../../services/registerThunk";
import {useDispatch} from "react-redux";
import $ from "jquery";


const InputUsername = () => {

    let [userName, setUserName] = useState('');
    const navigate = useNavigate()
    const navHome = () => {
        navigate('/');
    }
    const navRegister = () => {
        navigate('/register');
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

        <div className="row mt-5">
            <div className="row">
                <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
                    UserName:
                </div>
                <div className={`col-3 ${styles.textLeft}`}>
                    <input value={userName} onChange={(event) => setUserName(event.target.value)}
                           className="form-control" type="text"/>
                </div>
            </div>
        </div>




        <Button className={`mt-4  container ${styles.submitButton}`} onClick={signUpClickHandler}
                variant="warning">Reset My Password</Button>
        <Nav.Link className={`mt-4 text-white`} onClick={navRegister}>sign up?</Nav.Link>

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

export default InputUsername;