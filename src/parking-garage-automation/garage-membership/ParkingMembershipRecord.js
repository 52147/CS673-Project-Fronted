import React, {useState} from "react";
import {Table} from "react-bootstrap";
import Posts from "./Item"

const ParkingMembershipRecord = () => {


    return (<>
        <h1 className="mt-3 text-white">
            Membership Records
        </h1>

        <div className="mt-3 row me-4">
            <div className="col-12">
                <Table striped bordered hover className={`mt-1`} variant="light">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Plate Number</th>
                        <th>Enter Time</th>
                        <th>Exit Time</th>
                        <th>price</th>
                    </tr>
                    </thead>

                    <tbody>

                    {/*<Posts posts={posts}></Posts>*/}
                    </tbody>

                </Table>
            </div>
        </div>

    </>)

}

export default ParkingMembershipRecord;