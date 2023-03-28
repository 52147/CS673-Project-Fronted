import { React, useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFormThunk, record, FormThunk } from "../../services/formThunk";
import axios from "axios";

export const ReserveForm = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.updateForm);
  const [selectedParkingSpace, setSelectedParkingSpace] = useState("");
  const [vehicalType, setVehicalType] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const { users, username } = useSelector((state) => state.users);
  const [parkingSpaceNo, setParkingSpaceNo] = useState([]);
  const [response, setResponse] = useState(null);
  const [carPlate, setCarPlate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [carType, setCarType] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);

  useEffect(() => {
    setCValues({});
  }, [selectedParkingSpace]);
  const handleSlotClick = (value) => {
    if (selectedSlots.includes(value)) {
      // Slot is already selected, remove it from the array
      setSelectedSlots(selectedSlots.filter((slot) => slot !== value));
    } else {
      // Slot is not selected, add it to the array
      setSelectedSlots([...selectedSlots, value]);
    }
  };
  console.log(username);
  useEffect(() => {
    console.log("Fetching history...");
    dispatch(FormThunk());
  }, [dispatch]);
  console.log(history);
  const handleCarPlateChange = (event) => {
    setCarPlate(event.target.value);
  };
  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    console.log(event.target.value);
    console.log(carType);
    setVehicalType(carType);

    if (event.target.value === "Car") {
      setParkingSpaceNo(["1", "2", "3", "4", "5", "6"]);
    } else if (event.target.value === "Motorcycle") {
      setParkingSpaceNo(["7", "8", "9"]);
    } else if (event.target.value === "Bicycle") {
      setParkingSpaceNo(["10"]);
    }
  };
  useEffect(() => {
    if (selectedParkingSpace !== "") {
      const record = history.find(
        (record) => record.id === parseInt(selectedParkingSpace)
      );
      console.log(record);
      if (record) {
        const availableSlots = [];
        for (let i = 1; i <= 24; i++) {
          if (record[`a${i}`] === "EMPTY") {
            availableSlots.push(`a${i}`);
          }
        }
        for (let i = 1; i <= 24; i++) {
          if (record[`b${i}`] === "EMPTY") {
            availableSlots.push(`b${i}`);
          }
        }
        setAvailableSlots(availableSlots);
      }
    }
  }, [selectedParkingSpace, history]);

  const carData = {
    id: 666,
    type: "car",
    a1: "chepai",
    a2: "chepai",
    a3: "chepai",
    a4: "chepai",
    a5: "chepai",
    a6: "chepai",
    a7: "chepai",
    a8: "chepai",
    a9: "chepai",
    a10: "chepai",
    a11: "chepai",
    a12: "chepai",
    a13: "chepai",
    a14: "chepai",
    a15: "chepai",
    a16: "chepai",
    a17: "chepai",
    a18: "chepai",
    a19: "chepai",
    a20: "chepai",
    a21: "chepai",
    a22: "chepai",
    a23: "chepai",
    a24: "chepai",
    b1: "chepbi",
    b2: "chepbi",
    b3: "chepbi",
    b4: "chepbi",
    b5: "chepbi",
    b6: "chepbi",
    b7: "chepbi",
    b8: "chepbi",
    b9: "chepbi",
    b10: "chepbi",
    b11: "chepbi",
    b12: "chepbi",
    b13: "chepbi",
    b14: "chepbi",
    b15: "chepbi",
    b16: "chepbi",
    b17: "chepbi",
    b18: "chepbi",
    b19: "chepbi",
    b20: "chepbi",
    b21: "chepbi",
    b22: "chepbi",
    b23: "chepbi",
    b24: "chepbi",
    // ... include the rest of the JSON data here
  };

  const current = new Date(); // get the current date
  const year = current.getFullYear(); // get the year (4 digits)
  const month = String(current.getMonth() + 1).padStart(2, "0"); // get the month (2 digits) and pad with leading zero if needed
  const day = String(current.getDate()).padStart(2, "0"); // get the day (2 digits) and pad with leading zero if needed
  const formattedDate = `${year}-${month}-${day}`; // concatenate the year, month, and day with hyphens
  console.log(formattedDate); // output: "2023-03-27"

  const submitForm = async (event) => {
    event.preventDefault();
    console.log(cValues);
    const formData = {
      ...cValues,
    };
    Object.keys(formData).forEach((key) => (formData[key] = carPlate));
    console.log(formData); // or send it to API or save to database
    console.log(carType);
    const withCarType = {
      id: selectedParkingSpace,
      type: carType,
      ...formData,
    };
    console.log(withCarType);
    const url = `http://localhost:8080/parklot/save?date=${formattedDate}&license=${carPlate}&name=${username}`;
    console.log("url:", url);

    try {
      const res = await axios.post(url, withCarType);
      setResponse(res.data);
      console.log(" sending data:", res.data);
    } catch (error) {
      console.error("Error sending data:", error);
      setResponse("Error sending data");
    }
  };
  const currentDate = new Date().toLocaleDateString();
  const curr = new Date();
  const tomorrowDate = new Date(
    curr.getTime() + 24 * 60 * 60 * 1000
  ).toLocaleDateString(); // add 1 day (in milliseconds) to the current date

  const getTimeRange = (hour) => {
    const startHour = hour.toString().padStart(2, "0");
    const endHour = (hour + 1).toString().padStart(2, "0");
    return `${startHour}:00 ~ ${endHour}:00`;
  };

  const [cValues, setCValues] = useState({});
  const handleCClick = (value) => {
    setCValues((prevValues) => ({ ...prevValues, [value]: true }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Reservation Form - {currentDate}
      </h1>

      <Form className="bg-white p-8 rounded-lg shadow-lg mx-80">
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
            Car Type
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

        <Form.Group as={Row} controlId="formParkingSpace">
          <Form.Label column sm={3} className="text-lg font-semibold">
            Parking Space No.
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              value={selectedParkingSpace}
              onChange={(event) => setSelectedParkingSpace(event.target.value)}
            >
              <option value="">Select a parking space</option>
              {parkingSpaceNo.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group>
          <h5>Available Slots</h5>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>{currentDate}</Form.Label>
                <div className="d-flex flex-wrap">
                  {availableSlots
                    .filter((slot) => slot.startsWith("a"))
                    .map((slot, index) => (
                      <Button
                        key={slot}
                        variant={cValues[slot] ? "success" : "primary"}
                        onClick={() => handleCClick(slot)}
                        className="mr-2 mb-2"
                      >
                        {`${index + 1}:00-${index + 2}:00`}
                      </Button>
                    ))}
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>{tomorrowDate}</Form.Label>
                <div className="d-flex flex-wrap">
                  {availableSlots
                    .filter((slot) => slot.startsWith("b"))
                    .map((slot, index) => (
                      <Button
                        key={slot}
                        variant={cValues[slot] ? "success" : "primary"}
                        onClick={() => handleCClick(slot)}
                        className="mr-2 mb-2"
                      >
                        {`${index + 1}:00-${index + 2}:00`}
                      </Button>
                    ))}
                </div>
              </Form.Group>
            </Col>
          </Row>
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
