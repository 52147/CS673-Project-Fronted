import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appointmentFormThunk } from "../../services/formThunk";
import {
  Button,
  Table,
  Spinner,
  Pagination,
  Form,
  Modal,
} from "react-bootstrap";
import {
  faSearch,
  faPlus,
  faUpload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppointmentData } from "./AppointmentData";
export const Appointment = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { history, loading } = useSelector((state) => state.updateForm);

  console.log(history);

  useEffect(() => {
    console.log("Fetching history...");
    dispatch(appointmentFormThunk());
  }, [dispatch]);

  const [active, setActivePage] = useState(1);
  const [displayMessage, setDisplayMessage] = useState(""); // create state variable to display the message

  useEffect(() => {
    if (!loading) {
      paginationClickHandler(1); // 當進入頁面時，paginationClickHandler設定為 1
    }
    paginationClickHandler(1);
    setDisplayMessage(loading);
    console.log(loading);
    console.log(history);
  }, [loading]);

  let tempArr = [];
  const paginationClickHandler = (number) => {
    tempArr = [];
    for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
      if (i < history.length) {
        tempArr.push(history[i]); // temArr用來更新 post，將data推入 temArr，每次推入10筆資料
      }
    }
    setActivePage(number); // 展示完頁面後，設定pagination的數字標示為active
    setPosts(tempArr); // 更新 post 為 temArr
  };

  const pageNumbers = Math.ceil(history.length / 10); // 資料數量／１０為Pagination 圖標數量
  // let active = 1;
  let items = [];
  for (let number = 1; number <= pageNumbers; number++) {
    items.push(
      <Pagination.Item
        onClick={() => paginationClickHandler(number)} // 點擊 Pagination 圖標，推１０比資料到temArr
        key={number}
        active={number === active} // 當pagination圖標的數字 等於我們點擊的圖標，設圖標為active
      >
        {number}
      </Pagination.Item>
    );
  }
  const handleSearch = () => {
    const filteredPosts = history.filter((post) => {
      // Convert all fields to strings and join them into a single string
      const rowString = Object.values(post).join("").toLowerCase();

      // Check if the search query is a substring of the row string
      return rowString.includes(searchQuery.toLowerCase());
    });

    setFilteredData(filteredPosts);
    setPosts(filteredPosts); // Also update the posts state if needed
  };

  // 清空搜尋紀錄，並重新呈現所有紀錄
  const resetSearch = () => {
    setSearchQuery("");
    window.location.reload();
  };
  return (
    <div className="container-fluid">
      <div className="row bg-primary text-white py-3">
        <h1 className="col-12 text-center">RESERVATION MANAGEMENT</h1>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-md-6 offset-md-3">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Search Car plate Number"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <Button variant="light" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
            <div></div>
            <div className="col-md-3">
              <Button variant="primary" onClick={resetSearch}>
                Clear search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover className="mt-1" variant="light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>License</th>
              <th>Parking Slot</th>
            </tr>
          </thead>
          <tbody>
            <AppointmentData posts={posts} />
          </tbody>
        </Table>
        <div className="mt-2 d-flex justify-content-center">
          <Pagination className="justify-content-end me-5">{items}</Pagination>
        </div>
      </div>
    </div>
  );
};
