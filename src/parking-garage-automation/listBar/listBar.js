import {useNavigate} from "react-router";
import {ListGroup} from "react-bootstrap";
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
                        Parking Space
                        Management
                    </ListGroup.Item>

                </ListGroup>
        </div>

    );


}
export default ListBar;
