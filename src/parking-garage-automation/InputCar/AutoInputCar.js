import React, { useState, useEffect } from "react";
import styles from "./inputCar.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { checkInCarThunk } from "../../services/inputCarThunk";
import { Button, Modal } from "react-bootstrap";
import MessengerCustomerChat from "react-messenger-customer-chat";

export const AutoInputCar = (props) => {
    const [webSocketReturnData, setWebSocketReturnData] = useState("");
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080/websocket");

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // const data = {
            //     plate: contact,
            //     Entrance: "true"
            // }
            console.log(data)
            console.log(data.entrance === "false")
            setWebSocketReturnData(data);
            if (!data.entrance) {
                console.log("go")
                window.location.replace(`/information/${data.plate}`);
            } else {
                setShow(true);
            }
        }


        return () => {
            ws.close();
        };


    }, []);

    // const { responseMsg } = useSelector((state) => state.checkInCars);

    // const [contact, setContact] = useState("");
    // const dispatch = useDispatch();
    // const [isMouseOver, setMouseOver] = useState(false);
    const [show, setShow] = useState(false);

    // const submitPlateHandler = async () => {
    //     const content = {
    //         plate: contact,
    //         carType: "Car",
    //     };
    //     console.log(content);

    //     await dispatch(checkInCarThunk(content)).then((req) => {
    //         if (req.payload.content.Entrance === "false") {
    //             window.location.replace(`/information/${contact}`);
    //         } else {
    //             setShow(true);
    //         }
    //         console.log(responseMsg);
    //         console.log(req.payload.content);
    //         console.log(req.payload.content.Entrance);
    //     });
    // };
    const handleClose = () => setShow(false);

    // function handleMouseOver() {
    //     setMouseOver(true);
    // }
    // function handleMouseOut() {
    //     setMouseOver(false);
    // }
    // send a random id to backend
    // const handleCreateUser = () => {
    //     const content = {
    //         carType: "Bicycle",
    //         plate: contact,
    //     };
    //     dispatch(checkInCarThunk(content)).then((req) => {
    //         if (req.payload.content.Entrance === "false") {
    //             window.location.replace(`/information/${contact}`);
    //         } else {
    //             setShow(true);
    //         }
    //         console.log(responseMsg);
    //         console.log(req.payload.content.Entrance);
    //     });
    //     // dispatch(showBicycleUserThunk()).then((req) =>{
    //     //   console.log(req);
    //     // });
    // };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Input Plate License Number</h1>

                <div>
                    <p>Plate from car plate recognition model: {webSocketReturnData.plate}</p>
                    <p>
                        Entrance from car plate recognition model: {webSocketReturnData.entrance}
                    </p>
                </div>

                {
                    // !loading && <p>{responseMsg}</p>
                }
                {
                    // loading && <p>loading = true</p>
                }
                {/* <p>{contact}</p> */}
                {/* <input
                    className={styles.inputClass}
                    onChange={(event) => setContact(event.target.value)}
                    name="carNumber"
                    value={contact}
                    placeholder="Car Number"
                />
                <button
                    className={styles.buttonClass}
                    style={{ background: isMouseOver ? "black" : "white" }}
                    // html dom event: onMouseOver, onMouseOut
                    // event handling: allows javascript handle html event
                    onMouseOver={handleMouseOver} // handleMouseOver function will be executed when Mouse over
                    onMouseOut={handleMouseOut}
                    onClick={submitPlateHandler}
                >
                    Check-in
                </button>
                <br />
                <br />
                <button className={styles.buttonClass} onClick={handleCreateUser}>
                    Bicycle User Press Here
                </button> */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome Car {webSocketReturnData.entrance}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Welcome to Victory Eight Parking Lot</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {props.showMessengerCustomerChat ? (
                    <MessengerCustomerChat
                        pageId="107150052349235"
                        appId="2210845679103617"
                    />
                ) : undefined}
            </div>
        </div>
    );
};