import {Button, ButtonGroup, DropdownButton, Dropdown, Form, Table} from "react-bootstrap";
import React from "react";
import styles from './garage-data.module.css'

const GarageData = () => {
    return (<>
            <div className="row">
                <div className={`col-1 text-white ${styles.textRight}`}>
                    <h3>From: </h3>
                </div>
                <div className={`col-1  ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example">
                        <option>DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1  ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example2">
                        <option>MM</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example3">
                        <option>YYYY</option>
                        <option value="1">2023</option>
                        <option value="2">2024</option>
                        <option value="3">2025</option>
                    </Form.Select>
                </div>
                <div className={`col-1 text-white ${styles.textRight}`}>
                    <h3>To: </h3>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example">
                        <option>DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example2">
                        <option>MM</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example3">
                        <option>YYYY</option>
                        <option value="1">2023</option>
                        <option value="2">2024</option>
                        <option value="3">2025</option>
                    </Form.Select>
                </div>
            </div>


            <Table striped bordered hover className={`mt-2`}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Plate Number</th>
                    <th>Enter Time</th>
                    <th>Leaving Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    {/*<td colSpan={2}>Larry the Bird</td>*/}
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>

            <div className={` ${styles.pageButton}`}>
                <ButtonGroup>
                    <Button variant="light">1</Button>
                    <Button variant="light">2</Button>

                    <DropdownButton as={ButtonGroup} title="3" id="bg-nested-dropdown" variant="light">
                        <Dropdown.Item eventKey="1">3</Dropdown.Item>
                        <Dropdown.Item eventKey="2">4</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </div>
        </>
    )


}
export default GarageData;
