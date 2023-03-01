import {useNavigate} from "react-router";
import styles from "./listBar.module.css"
import {Row, ListGroup, Col, Tab} from "react-bootstrap";
import GarageData from "../garage-historyData/garage-data";
import {Autho} from "../authority-management/Autho"
import {Fee} from "../fee-management/Fee"
import React from "react";




const ListBar = () => {
    const navigate = useNavigate()

    const feeHandler = () => {
        navigate('/modules/fee');
    }

    const historyHandler = () => {
        navigate('/modules/garageData');
    }

    const authoHandler = () => {
        navigate('/modules/autho');
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
            <Tab.Container id="list-group-tabs-example" >
                {/*<Row className={"ms-2"}>*/}
                {/*    <Col sm={2}>*/}
                        <ListGroup>
                        <ListGroup.Item  href="#fee" onClick={feeHandler}>
                        Fee Management
                            </ListGroup.Item>

                            <ListGroup.Item  href="#History Data" onClick={historyHandler}>
                                Parking History
                            </ListGroup.Item>
                            <ListGroup.Item  href="#Authority" onClick={authoHandler}>
                                Authority
                                Management
                            </ListGroup.Item>
                        </ListGroup>
                    {/*</Col>*/}
                    {/*<Col sm={10}>*/}
                    {/*    <Tab.Content>*/}
                    {/*        <Tab.Pane eventKey="#fee">*/}
                    {/*            <Fee/>*/}
                    {/*        </Tab.Pane>*/}

                    {/*        <Tab.Pane eventKey="#History Data">*/}
                    {/*            <GarageData></GarageData>*/}
                    {/*        </Tab.Pane>*/}
                    {/*        <Tab.Pane eventKey="#Authority">*/}
                    {/*            <Autho/>*/}
                    {/*        </Tab.Pane>*/}

                    {/*    </Tab.Content>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
            </Tab.Container>
        </div>

    );


}
export default ListBar;
