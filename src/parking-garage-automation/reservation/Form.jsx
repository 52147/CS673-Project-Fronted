import { React, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFormThunk } from "../../services/formThunk";
export const ReserveForm = () => {
  const { loading, load, token, users } = useSelector((state) => state.users);
  console.log(users);

  const [carPlate, setCarPlate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [carType, setCarType] = useState("");
  const dispatch = useDispatch();

  const handleCarPlateChange = (event) => {
    setCarPlate(event.target.value);

  };
  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleReservationTimeChange = (event) => {
    setReservationTime(event.target.value);
  };

  const submitForm = () => {
    dispatch(
      updateFormThunk(
        {
          type: carType,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          reservationTime: reservationTime,
          // "A13": reservationTime,
          // "A14": reservationTime,
          // "A15": reservationTime,
          // "A16": reservationTime,
          // "A17": reservationTime,
          // "A18": reservationTime,
          // "A18": reservationTime,
          // "A8": reservationTime,
          // "A9": reservationTime,
          // "A10": reservationTime,
          // "A11": reservationTime,
          // "A12": reservationTime,
        },

        // { date: currentDate, license: carPlate, name: users }
      )
    );
    console.log(carType);
    console.log(reservationTime);
    console.log(currentDate);
    console.log(carPlate);
    console.log(users);
  };
  const currentDate = new Date().toLocaleDateString();

  const getTimeRange = (hour) => {
    const startHour = hour.toString().padStart(2, "0");
    const endHour = (hour + 1).toString().padStart(2, "0");
    return `${startHour}:00 ~ ${endHour}:00`;
  };

  const firstHalfHours = [...Array(12).keys()].map((hour) => (
    <Form.Check
      type="radio"
      label={getTimeRange(hour)}
      name="reservationTime"
      value={getTimeRange(hour)}
      checked={reservationTime === getTimeRange(hour)}
      onChange={handleReservationTimeChange}
      key={hour}
      className="text-base font-medium text-gray-700"
    />
  ));

  const secondHalfHours = [...Array(12).keys()].map((hour) => (
    <Form.Check
      type="radio"
      label={getTimeRange(hour + 12)}
      name="reservationTime"
      value={getTimeRange(hour + 12)}
      checked={reservationTime === getTimeRange(hour + 12)}
      onChange={handleReservationTimeChange}
      key={hour + 12}
      className="text-base font-medium text-gray-700"
    />
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Reservation Form - {currentDate}
      </h1>

      <Form className="bg-white p-8 rounded-lg shadow-lg">
        <Form.Group as={Row} controlId="formCarPlate">
          <Form.Label column sm={3} className="text-lg font-semibold">
            Car Plate Number
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Enter car plate number"
              value={carPlate}
              onChange={handleCarPlateChange}
              className="rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formCarPlate">
          <Form.Label column sm={3} className="text-lg font-semibold">
            Car Plate Number
          </Form.Label>
          <Col sm={9}>
            <Form.Select onChange={handleCarTypeChange}>
              <option>Default select</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Bicycle">Bicycle</option>
            </Form.Select>
          </Col>
          <br />
        </Form.Group>

        <Form.Group as={Row} controlId="formReservationTime">
          <Form.Label column sm={3} className="text-lg font-semibold">
            Reservation Time
          </Form.Label>
          <Col sm={9}>
            <Row>
              <Col>{firstHalfHours}</Col>
              <Col>{secondHalfHours}</Col>
            </Row>
          </Col>
        </Form.Group>
        <div className="mt-6 ">
          <Button
            onClick={submitForm}
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
