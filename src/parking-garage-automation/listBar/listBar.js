import {useNavigate} from "react-router";
import styles from "./listBar.module.css"
import {Row, ListGroup, Col, Tab} from "react-bootstrap";
import GarageData from "../garage-historyData/garage-data";
import React from "react";




const ListBar = () => {

    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    const navigate = useNavigate()

    const navHome = () => {

        navigate('/');
    }


    return (
        // <>
        //     <ul>
        //         <li><a className="active" href="#home">Home</a></li>
        //         <li><a href="#news">Info</a></li>
        //         <li><a href="#contact">Pay</a></li>
        //     </ul>
        // </>

        <div className="container mt-3">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#History Data">
                <Row className={"ms-2"}>
                    <Col sm={2}>
                        <ListGroup>
                            {/*<ListGroup.Item action href="#Parking Lot">*/}
                            {/*    Parking Lot Management*/}
                            {/*</ListGroup.Item>*/}
                            <ListGroup.Item action href="#History Data">
                                Parking History
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Authority">
                                Authority
                                Management
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            {/*<Tab.Pane eventKey="#Parking Lot">*/}
                            {/*</Tab.Pane>*/}
                            <Tab.Pane eventKey="#History Data">
                                <GarageData></GarageData>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Authority">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    );


}
export default ListBar;
