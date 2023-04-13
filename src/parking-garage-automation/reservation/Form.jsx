import { React, useState, useEffect } from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FormThunk } from "../../services/formThunk";
import axios from "axios";
import { useNavigate } from "react-router";

export const ReserveForm = ({ setData }) => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.updateForm)|| {};
  const [selectedParkingSpace, setSelectedParkingSpace] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const { users, username } = useSelector((state) => state.users);
  const [parkingSpaceNo, setParkingSpaceNo] = useState([]);
  const [response, setResponse] = useState(null);
  const [carPlate, setCarPlate] = useState("");
  const [carType, setCarType] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShowWarningModal(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  // useEffect 顯示被選擇的button
  useEffect(() => {
    setCValues({});
  }, [selectedParkingSpace]);

  // useEffect 顯示從後端反回的數據
  console.log(username);
  useEffect(() => {
    console.log("Fetching history...");
    dispatch(FormThunk());
  }, [dispatch]);
  console.log(history);

  // useState 抓到更新的車牌
  const handleCarPlateChange = (event) => {
    setCarPlate(event.target.value);
  };

  // 將兩個select option關聯起來，用兩個useState，第一個useState用來改變第一個select，第二個useState根據第一個useState，來呈現option
  // 可以將option中的選項放在一個array中，顯示option用map iterate 數組中的內容
  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    console.log(event.target.value);
    console.log(carType);
    if (event.target.value === "Car") {
      setParkingSpaceNo(["1", "2", "3", "4", "5", "6"]);
    } else if (event.target.value === "Motorcycle") {
      setParkingSpaceNo(["7", "8", "9"]);
    } else if (event.target.value === "Bicycle") {
      setParkingSpaceNo(["10"]);
    }
  };

  // useEffect 如果 user 選了一個車位，先找到此車位的紀錄，查看column是否是empty，
  // 如果是empty，把此時段加到數組，接下來用此數組產出button
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

  // 需要返回給後端的資料樣式
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

  // 格式化今天和明天的日期為: 2018-05-05
  const current = new Date(); // get the current date

  const year = current.getFullYear(); // get the year (4 digits)
  const month = String(current.getMonth() + 1).padStart(2, "0"); // get the month (2 digits) and pad with leading zero if needed
  const day = String(current.getDate()).padStart(2, "0"); // get the day (2 digits) and pad with leading zero if needed
  const formattedDate = `${year}-${month}-${day}`; // concatenate the year, month, and day with hyphens
  console.log(formattedDate); // output: "2023-03-27"
  const navigate = useNavigate();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // set the date to tomorrow

  const tyear = tomorrow.getFullYear();
  const tmonth = tomorrow.getMonth() + 1; // month is zero-indexed, so add 1
  const tday = tomorrow.getDate();

  const tomorrowFormatted =
    tyear +
    "-" +
    (tmonth < 10 ? "0" + tmonth : tmonth) +
    "-" +
    (tday < 10 ? "0" + tday : tday);
  console.log(tomorrowFormatted); // output: "2023-03-29" (assuming today is March 28th, 2023)

  const validateForm = () => {
    const hasSelectedTimeSlot = Object.values(cValues).includes(true);
    console.log("hasSelectedTimeSlot", hasSelectedTimeSlot);
    if (
      carPlate === "" ||
      carType === "" ||
      selectedParkingSpace === "" ||
      hasSelectedTimeSlot != true
    ) {
      setIsFormValid(false);
      setShowWarningModal(true); // Display warning modal
    } else {
      setIsFormValid(true);
    }
    console.log("cValues", cValues);
  };
  // 發送資料到後端：3比資料用url param key，1比資料用json放到body帶過去
  const submitForm = async (event) => {
    validateForm();
    if (isFormValid) {
      // Submit form logic
      setShow(true);
      // Display success modal

      event.preventDefault();
      console.log(cValues);
      // forData 為 {a1: true, b23: true}
      const formData = {
        ...cValues,
      };
      Object.keys(formData).forEach((key) => (formData[key] = carPlate)); // 把所有value改為車牌號碼
      console.log(formData); // or send it to API or save to database
      console.log(carType);
      let reserveFee = 1;
      console.log(Object.keys(formData).length)
      const totalReserveTime = Object.keys(formData).length;
      console.log(totalReserveTime * 30);
      if(carType === "Car"){
        reserveFee = totalReserveTime * 30;
      }else if(carType === "Motorcycle"){
        reserveFee = totalReserveTime * 20;
      }else{
        reserveFee = totalReserveTime * 10;
      }
      console.log("reserve Fee", reserveFee);
      const withCarType = {
        id: selectedParkingSpace,
        type: carType,
        ...formData,
      };
      console.log(withCarType);
      const url = `http://localhost:8080/parklot/save?date=${result}&license=${carPlate}&name=${username}`;
      console.log("url:", url);

      try {
        const res = await axios.post(url, withCarType);
        setResponse(res.data);
        console.log(" sending data:", res.data);
      } catch (error) {
        console.error("Error sending data:", error);
        setResponse("Error sending data");
      }
      const sendData = {
        from: "reservation",
        hour: totalReserveTime,
        result,
        carPlate,
        username,
        withCarType,
      };
      // setData("14567")
      setData(sendData);
      setTimeout(() => {
        // navigate(`/payment/${carPlate}`);
        // window.location.reload();
      }, "1500");
    } 
  };

  const currentDate = new Date().toLocaleDateString();
  const curr = new Date();
  const tomorrowDate = new Date(
    curr.getTime() + 24 * 60 * 60 * 1000
  ).toLocaleDateString(); // add 1 day (in milliseconds) to the current date

  const getTimeRange = (hour, isColumnA) => {
    let startHour;
    if (hour === 0 && isColumnA) {
      startHour = "24";
    } else if (hour === 0 && !isColumnA) {
      startHour = "00";
    } else {
      startHour = hour.toString().padStart(2, "0");
    }
    const endHour = (hour + 1).toString().padStart(2, "0");
    // console.log(`${startHour}:00 ~ ${endHour}:00`);
    return `${startHour}:00 ~ ${endHour}:00`;
  };
  const [time, setTime] = useState({});

  // 抓出user選擇的button裡的資料
  const [cValues, setCValues] = useState({});
  const handleCClick = (value) => {
    console.log(value);
    setTime((prevValues) => ({ ...prevValues, value }));
    console.log(time);

    // 將所有選到的值，用 a1: true，的方式儲存在 cValue
    setCValues((prevValues) => {
      const newState = { ...prevValues };
      newState[value] = !newState[value];
      return newState;
    });
  };

  // 將user 選擇的button，格式化資料為想要的格式： a1 -> 24:00 ~ 1:00
  const selectedSlotsOne = Object.keys(cValues)
    .filter((key) => cValues[key])
    .map((slot) => {
      const isColumnA = slot.startsWith("a");
      console.log(slot);

      if (slot.startsWith("a")) {
        const hour = parseInt(slot.substr(1)) - 1;
        return getTimeRange(hour, isColumnA);
      }
    });

  const selectedSlotsTwo = Object.keys(cValues)
    .filter((key) => cValues[key])
    .map((slot) => {
      const isColumnA = slot.startsWith("b");
      if (slot.startsWith("b")) {
        const hour = parseInt(slot.substr(1)) - 1;
        return getTimeRange(hour, isColumnA);
      }
    });
  const selectedSlotsStringOne = selectedSlotsOne.join(" ");
  const dateStringOne = `${formattedDate}: ${selectedSlotsStringOne}`;
  const selectedSlotsStringTwo = selectedSlotsTwo.join(" ");
  const dateStringTwo = `${tomorrowFormatted}: ${selectedSlotsStringTwo}`;

  const result = dateStringOne + " " + dateStringTwo;

  console.log(result);

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

        <Form.Group as={Row} controlId="formCarPlate" className="mt-4">
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

        <Form.Group as={Row} controlId="formParkingSpace" className="mt-4">
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
                    .map((slot) => (
                      <Button
                        key={slot}
                        variant={cValues[slot] ? "success" : "primary"}
                        onClick={() => handleCClick(slot)}
                        className="mr-2 mb-2"
                      >
                        {getTimeRange(parseInt(slot.substr(1)) - 1, true)}
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
                    .map((slot) => (
                      <Button
                        key={slot}
                        variant={cValues[slot] ? "success" : "primary"}
                        onClick={() => handleCClick(slot)}
                        className="mr-2 mb-2"
                      >
                        {getTimeRange(parseInt(slot.substr(1)) - 1, false)}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Form Submit Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body> Submit Successfully! </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showWarningModal} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in all required fields.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
