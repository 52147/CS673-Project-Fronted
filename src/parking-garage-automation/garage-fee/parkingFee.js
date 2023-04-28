import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  InputGroup,
  Modal,
  Spinner,
  Table,
} from "react-bootstrap";
import styles from "../garage-fee/parkingFee.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFeeThunk, setFeeThunk } from "../../services/feeManagementThunk";

const ParkingFee = () => {
  const { loading, firstHour, firstFee, secondFee, maxFee, addition } =
    useSelector((state) => state.parkFee);

  let [newFirstHour, setNewFirstHour] = useState("");
  let [newFirstFee, setNewFirstFee] = useState("");
  let [newSecondFee, setNewSecondFee] = useState("");
  let [newMaxFee, setNewMaxFee] = useState("");
  let [newAddition, setNewAddition] = useState("");

  let [carType, setCarType] = useState("Car");

  const carClickHandler = () => {
    carType = "Car";
    setCarType("Car");
    dispatch(getFeeThunk({ carType }));
  };
  const motorcycleClickHandler = () => {
    carType = "Motorcycle";
    setCarType("Motorcycle");
    dispatch(getFeeThunk({ carType }));
  };

  const bicycleClickHandler = () => {
    carType = "Bicycle";
    setCarType("Bicycle");
    dispatch(getFeeThunk({ carType }));
  };

  const [show, setShow] = useState(false);
  const resetClickHandlerClose = () => setShow(false);
  const resetClickHandlerShow = () => {
    setShow(true);
  };

  const newFee = {
    carType: carType,
    hour: newFirstHour,
    firstPrice: newFirstFee,
    secondPrice: newSecondFee,
    maxPrice: newMaxFee,
    comment: newAddition,
  };

  const resetNewFee = () => {
    setNewFirstHour("");
    setNewFirstFee("");
    setNewSecondFee("");
    setNewMaxFee("");
    setNewAddition("");
  };

  const submitClickHandler = async () => {
    await dispatch(setFeeThunk(newFee));
    dispatch(getFeeThunk({ carType }));
    resetNewFee();
    resetClickHandlerClose();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeeThunk({ carType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row bg-primary text-white py-3">
        <h1 className="col-12 text-center">FEE MANAGEMENT</h1>
      </div>
      <br/>

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden mt-5">Loading...</span>
        </Spinner>
      )}
      {!loading && (
        <>
          <div className="row ms-2">
            <div className={`col-4 text-white ${styles.textRight}`}>
              <h3>Vehicles type: </h3>
            </div>
            <div className={`col-2 ${styles.textLeft}`}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className={` ${styles.dropdownButton}`}
                >
                  {carType}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#Car" onClick={carClickHandler}>
                    Car
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#Motorcycle"
                    onClick={motorcycleClickHandler}
                  >
                    Motorcycle
                  </Dropdown.Item>
                  <Dropdown.Item href="#Bicycle" onClick={bicycleClickHandler}>
                    Bicycle
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className={`col-2 `}>
              <Button onClick={resetClickHandlerShow} variant="warning">
                Reset
              </Button>
            </div>
          </div>

          <div className={`row mt-3 ${styles.tableSize}`}>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h4>{carType} Charging Rules</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First {firstHour} Hour</td>
                  <td>{firstFee} USD/Hour</td>
                </tr>
                <tr>
                  <td>After {firstHour} Hour</td>
                  <td>{secondFee} USD/Hour</td>
                </tr>
                <tr>
                  <td>Max Fee</td>
                  <td>{maxFee} USD/Day</td>
                </tr>
                <tr>
                  <td colSpan={2} className={`${styles.textLeft}`}>
                    <h5>Addition:</h5>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className={`${styles.textLeft}`}>
                    {addition}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Modal show={show} onHide={resetClickHandlerClose} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Reset {carType} Fee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Label htmlFor="time-period">
                Set The First Time Period
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={firstHour}
                  aria-label="firstHour"
                  aria-describedby="time-period"
                  value={newFirstHour}
                  onChange={(event) => setNewFirstHour(event.target.value)}
                />
                <InputGroup.Text>hour</InputGroup.Text>
              </InputGroup>

              <Form.Label htmlFor="first-period-fee">
                Set Fee of First Time Period Fee
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder={firstFee}
                  aria-label="firstFee"
                  aria-describedby="first-period-fee"
                  value={newFirstFee}
                  onChange={(event) => setNewFirstFee(event.target.value)}
                />
                <InputGroup.Text>/hour</InputGroup.Text>
              </InputGroup>

              <Form.Label htmlFor="second-period-fee">
                Set Fee of Second Time Period
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder={secondFee}
                  aria-label="secondFee"
                  aria-describedby="second-period-fee"
                  value={newSecondFee}
                  onChange={(event) => setNewSecondFee(event.target.value)}
                />
                <InputGroup.Text>/hour</InputGroup.Text>
              </InputGroup>

              <Form.Label htmlFor="max-fee">Set Max Fee</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  placeholder={maxFee}
                  aria-label="maxFee"
                  aria-describedby="max-fee"
                  value={newMaxFee}
                  onChange={(event) => setNewMaxFee(event.target.value)}
                />
                <InputGroup.Text>/day</InputGroup.Text>
              </InputGroup>

              <Form.Label htmlFor="addition">Addition</Form.Label>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  placeholder={addition}
                  aria-label="maxFee"
                  aria-describedby="max-fee"
                  value={newAddition}
                  onChange={(event) => setNewAddition(event.target.value)}
                />
              </InputGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button
                type="submit"
                variant="primary"
                onClick={submitClickHandler}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default ParkingFee;
