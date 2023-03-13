import {useNavigate} from "react-router";
import {ListGroup, Tab} from "react-bootstrap";
import React from "react";


const ListBar = ({active}) => {
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

    const garageHandler = () => {
        navigate('/modules/garageDataManagement');
    }


    return (
        <div className="container mt-3 ms-1">

                {/*<Row className={"ms-2"}>*/}
                {/*    <Col sm={2}>*/}
                <ListGroup defaultActiveKey={active}>
                    <ListGroup.Item onClick={feeHandler} action href="#fee">
                        Fee Management
                    </ListGroup.Item>

                    <ListGroup.Item onClick={historyHandler} action href="#History Data">
                        Parking History
                    </ListGroup.Item>

                    <ListGroup.Item onClick={authoHandler} action href="#Authority">
                        Authority
                        Management
                    </ListGroup.Item>

                    <ListGroup.Item onClick={garageHandler} action href="#Garage Data">
                        Garage Data
                        Management
                    </ListGroup.Item>

                </ListGroup>
                {/*</Col>*/}
                {/*<Col sm={10}>*/}
                {/*    <Tab.Content>*/}
                {/*        <Tab.Pane eventKey="#fee">*/}
                {/*            <ParkingFee/>*/}
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

        </div>

    );


}
export default ListBar;
