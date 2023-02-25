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
        <div className={'container-fluid mt-3'}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#History Data">
                <Row>
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action href="#History Data">
                                History Data
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#History Data">
                                <GarageData></GarageData>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>

    );


}
export default ListBar;
