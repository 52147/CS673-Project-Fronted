import NavBar from "./navBar";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";

const NavBarComponent = () => {
    const {users} = useSelector((state) => state.submitUser);

    const logOutHandler = () => {
        localStorage.removeItem('userObject');
        TimeOutHandlerShow();
        setTimeout(() => window.location.replace(`/`), 3000)

    }

    const [show, setShow] = useState(false);
    const TimeOutHandlerClose = () => {
        setShow(false)
        window.location.replace(`/`)
    };
    const TimeOutHandlerShow = () => {
        setShow(true);
        setTimeout(() => TimeOutHandlerClose(), 3000)
    }

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let time  = date.getTime()/1000
        //let time  = 1680056270
        if(time > users.exp){
            logOutHandler()
        }
        console.log(time)
        console.log(users)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users,date]);
    return (


        <>
            <NavBar></NavBar>

            <Modal
                show={show}
                onHide={TimeOutHandlerShow}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login Again</Modal.Title>
                </Modal.Header>
                <Modal.Body> Login status timeout, please login again！</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={TimeOutHandlerClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavBarComponent;