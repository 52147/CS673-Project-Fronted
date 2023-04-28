import styles from "./forgetP.module.css";
import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {changePasswordThunk} from "../../services/forgetPasswordThunk";
import {useDispatch, useSelector} from "react-redux";

export const UpdatePassword = () => {
    const { user} = useSelector((state) => state.forgetPassword)
    let [password1, setPassword1] = useState("");
    let [password2, setPassword2] = useState("");
    const [formErrors, setFormErrors] = useState([]);

    const dispatch = useDispatch();
    const changePassword = () => {
        const errors = [];
        if (password1.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        } else if (password1 !== password2) {
            errors.push('Passwords do not match.');
        }
        setFormErrors(errors);
        if (errors.length === 0) {
            const users={
                password:password1,
                username:user.username
            }
            dispatch(changePasswordThunk(users));
            window.location.replace(`/`);
        } else {
            errorHandlerShow();
        }

    };


    const [errorShow, setErrorShow] = useState(false);
    const errorHandlerClose = () => {
        setErrorShow(false)
    };
    const errorHandlerShow = () => {
        setErrorShow(true);
    }

    const navigate = useNavigate()
    const [successShow, setSuccessShow] = useState(false);
    const successHandlerClose = () => {
        navigate('/');
        setSuccessShow(false)
    };


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
                    onHide= {successHandlerClose}
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
            </div>
        </>
    );
};
