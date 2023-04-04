import styles from "./forgetP.module.css";
import {Button, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";


const InputEmail = () => {

    let [userName, setUserName] = useState('');
    const navigate = useNavigate()
    const navRegister = () => {
        navigate('/register');
    }

    const signUpClickHandler = () => {

    }


    return (<>
        <div className="row mt-4">
            <div className="row">
                <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
                    e-mail:
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

    </>)

}

export default InputEmail;