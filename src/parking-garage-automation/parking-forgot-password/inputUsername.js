import styles from "./forgetP.module.css";
import { Button, Modal, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {forgetPasswordThunk} from "../../services/forgetPasswordThunk";


const InputUsername = ({setValue}) => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate()
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

    const dispatch = useDispatch();
    const signUpClickHandler = async () => {

        const checkUsername = await dispatch(forgetPasswordThunk(userName));
        if(checkUsername.type === '/username/fulfilled'){
            setValue('sq')
            setUserName('')
        }else{
            errorHandlerShow()
            //setValue('sq')
        }
    }


    return (<>
        <div className="row mt-5">
            <div className="row">
                <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
                    Username:
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
            onHide={errorHandlerClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body> This username dose not exist!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={errorHandlerClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    </>)

}

export default InputUsername;