import React, {useState} from "react";
import {Button, Card, CardGroup, Table} from "react-bootstrap";
import styles from './membership.module.css'
import {useNavigate} from "react-router";


const ParkingMembership = ({setData}) => {
    let [price, setPrice] = useState(0);
    const navigate = useNavigate()
    const monthPayButtonClickHandler = () => {
        price = 200;
        const payInfo=
            {
                from:"membership",
                price:price
            }
        //console.log(payInfo)
        setData(payInfo)
        navigate(`/payment`)
    }

    const yearPayButtonClickHandler = () => {
        price = 2000;
        const payInfo=
            {
                from:"membership",
                price:price
            }
        //console.log(payInfo)
        setData(payInfo)
        navigate(`/payment`)
    }


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
            <tr>
                <td colSpan={3}>Your membership has expired.</td>
            </tr>
            </tbody>

        </Table>

        <h1 className="mt-5 text-white">
            Pricing
        </h1>

        <CardGroup className={ `container ${styles.card}`}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Buy a month</Card.Title>
                    <Card.Text>
                        Down from $39/month.
                        Our monthly plan grants access to all premium features,
                        the best plan for short-term subscribers.
                    </Card.Text>
                    <Button className={`${styles.payButton}`}
                            onClick={monthPayButtonClickHandler}
                            variant="warning">Pay</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">36% of people choose this</small>
                </Card.Footer>
            </Card>
            <br />
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Buy a year</Card.Title>
                    <Card.Text>
                        Our most popular plan previously sold for $299 and is now only $13.25/month.
                        This plan saves you over 60% in comparison to the monthly plan.
                    </Card.Text>
                    <Button className={`${styles.payButton}`}
                            onClick={yearPayButtonClickHandler}
                            variant="warning">Pay</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">64% of people choose this</small>
                </Card.Footer>
            </Card>
            <br />

        </CardGroup>
    </>)

}

export default ParkingMembership;