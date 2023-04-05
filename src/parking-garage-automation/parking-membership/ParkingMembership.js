import React, {useState} from "react";
import {Card, CardGroup, Table} from "react-bootstrap";
import styles from './membership.module.css'


const ParkingMembership = () => {


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
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">30% of people choose this</small>
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
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">68% of people choose this</small>
                </Card.Footer>
            </Card>
            <br />
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Customize your plan</Card.Title>
                    <Card.Text>
                        111
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">2% of people choose this</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </>)

}

export default ParkingMembership;