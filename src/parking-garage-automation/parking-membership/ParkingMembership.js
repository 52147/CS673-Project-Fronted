import React, {useEffect, useState} from "react";
import {Alert, Button, Card, CardGroup, Form, InputGroup, Modal, Table} from "react-bootstrap";
import styles from './membership.module.css'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getMembershipThunk} from "../../services/membershipThunk";
import Posts from "./Item";



const ParkingMembership = ({setData}) => {
    const {
        historyAll,
    } = useSelector((state) => state.parkMembership)
    //console.log(historyAll)
    const { users } = useSelector((state) => state.users);

    const [price, setPrice] = useState(0);
    const [memberType, setMemberType] = useState('');
    const [plate, setPlate] = useState('');
    const [check, setCheck] = useState(0);
    const navigate = useNavigate()
    const monthPayButtonClickHandler = () => {
        setPrice(200)
        setMemberType('month')
        payClickHandlerShow();
    }

    const yearPayButtonClickHandler = () => {
        setPrice(1999)
        setMemberType('year')
        payClickHandlerShow();
    }

    const payButtonClickHandler = () => {
        console.log(price)
        if(!plate){
            setCheck(1)
        }else{
            const payInfo=
                {
                    from:"membership",
                    price:price,
                    userId:users.username,
                    permitType:memberType,
                    plate:plate,
                }
            setData(payInfo)
            navigate(`/payment`)
        }
    }


    const [show, setShow] = useState(false);
    const payClickHandlerClose = () => {
        setShow(false);
        setPlate('');
    }
    const payClickHandlerShow = () => {
        setShow(true);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        const userInput ={
            userId : users.username
        }
        dispatch(getMembershipThunk(userInput))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>
        <h1 className="mt-5 text-white">
            Membership Status
        </h1>

        <Table striped bordered hover className={`mt-1 container ${styles.form}`} variant="light">
            <thead>
            <tr>
                <th>Username</th>
                <th>Plate Number</th>
                <th>Expire Date</th>
            </tr>
            </thead>
            <tbody>
            {historyAll.length ===0 &&
                <tr>
                    <td colSpan={3}>Your membership has expired.</td>
                </tr>
            }
            {
                historyAll !==[]&&
                <Posts posts={historyAll}></Posts>
            }


            </tbody>

        </Table>

        <h1 className="mt-5 text-white">
            Pricing
        </h1>

        <CardGroup className={ `container ${styles.card}`}>
            <Card>
                <Card.Body>
                    <Card.Title>Buy a month</Card.Title>
                    <Card.Text>
                        The best plan for short-term subscribers.

                        <h1 className={` `}><br/>200/mo</h1>
                    </Card.Text>
                    <Button className={`mt-2 ${styles.payButton}`}
                            onClick={monthPayButtonClickHandler}
                            variant="warning">Buy</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">36% of people choose this</small>
                </Card.Footer>
            </Card>
            <br />

            <Card>
                {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
                <Card.Body>
                    <Card.Title>Buy a year</Card.Title>
                    <Card.Text>
                        Our most popular plan previously sold for $2199 and is now only $166.6/month.
                        <h1 className={`mt-4 `}>1999/year</h1>
                    </Card.Text>
                    <Button className={`mt-2 ${styles.payButton}`}
                            onClick={yearPayButtonClickHandler}
                            variant="warning">Buy</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">64% of people choose this</small>
                </Card.Footer>
            </Card>
            <br />
        </CardGroup>

        <Modal
            show={show}
            onHide={payClickHandlerClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Buy Membership</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    check === 1 && <Alert key={"danger"} variant={'danger'}>
                        Please enter plate!
                    </Alert>
                }

                <Form.Label htmlFor="time-period">Plate:</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter the Plate"
                        value={plate}
                        onChange={(event) => setPlate(event.target.value)}
                    />
                </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button type="submit" variant="primary" onClick={payButtonClickHandler}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>

    </>)

}

export default ParkingMembership;