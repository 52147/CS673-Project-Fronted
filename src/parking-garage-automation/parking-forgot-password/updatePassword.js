import styles from "./forgetP.module.css";
import {Button, Modal, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";

export const UpdatePassword = () => {
    let [password1, setPassword1] = useState("");
    let [password2, setPassword2] = useState("");

    const changePassword = () => {
        if(password1=== password2){
            console.log('same')
            //window.location.replace(`/`);
        }else{
            errorHandlerShow()
        }
    };

    const [errorShow, setErrorShow] = useState(false);
    const errorHandlerClose = () => {
        setErrorShow(false)
    };
    const errorHandlerShow = () => {
        setErrorShow(true);
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
                        New Password:
                    </div>
                    <div className={`col-3 ${styles.textLeft}`}>
                        <input
                            value={password1}
                            onChange={(event) => setPassword1(event.target.value)}
                            className="form-control"
                            type="password"
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
                        Re-enter New Password:
                    </div>
                    <div className={`col-3 ${styles.textLeft}`}>
                        <input
                            value={password2}
                            onChange={(event) => setPassword2(event.target.value)}
                            className="form-control"
                            type="password"
                        />
                    </div>
                </div>

                <Button
                    className={`mt-4  container ${styles.submitButton}`}
                    onClick={changePassword}
                    variant="warning"
                >
                    Reset
                </Button>

                <Modal
                    show={errorShow}
                    onHide={errorHandlerClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> These two passwords are not identical!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={errorHandlerClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
