import React, { useEffect, useState } from "react";
import { Button, Dropdown, Pagination, Table } from "react-bootstrap";
import Posts from "./Item";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMembershipThunk,
  getMembershipByPlateThunk,
  getMembershipThunk,
} from "../../services/membershipThunk";
import styles from "../garage-historyData/garage-data.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { utils, writeFile } from "xlsx";

const ParkingMembershipRecord = () => {
  const { historyAll, loading } = useSelector((state) => state.parkMembership);

  const [posts, setPosts] = useState([]);
  const [active, setActivePage] = useState(1);
  let [plate, setPlate] = useState("");
  let [username, setUsername] = useState("");
  let [findWay, setFindWay] = useState("plate");

  const plateClickHandler = () => {
    setUsername("");
    findWay = "plate";
    setFindWay("plate");
    //dispatch(getFeeThunk({findWay}))
  };
  const usernameClickHandler = () => {
    setPlate("");
    findWay = "username";
    setFindWay("username");
    //dispatch(getFeeThunk({findWay}))
  };

  const paginationClickHandler = React.useCallback(
    (number) => {
      let tempArr = [];
      for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
        if (i < historyAll.length) {
          tempArr.push(historyAll[i]);
        }
      }
      setActivePage(number);
      setPosts(tempArr);
    },
    [historyAll]
  );

  const pageNumbers = Math.ceil(historyAll.length / 10);

  let items = [];
  for (let number = 1; number <= pageNumbers; number++) {
    items.push(
      <Pagination.Item
        onClick={() => paginationClickHandler(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const searchClickHandler = () => {
    if (findWay === "plate") {
      const plates = {
        plate: plate,
      };
      //console.log(plates)
      dispatch(getMembershipByPlateThunk(plates));
    } else {
      const usernames = {
        userId: username,
      };
      //console.log(date)
      dispatch(getMembershipThunk(usernames));
    }
  };

  const handleExportXLS = () => {
    let rowData = [["#", "Username", "Plate Number", "Expire Date"]]; // 設置column名
    historyAll.forEach((data) => {
      // 製造一個新的array，加上資料和column
      rowData.push([data.id, data.userId, data.plate, data.endTime]);
    });
    const wb = utils.book_new(); // 製造一個excel work book(workbook裡可以有很多worksheet，work sheet 為 excel file裡面的一個表)
    const ws = utils.aoa_to_sheet(rowData); // 用aoa_to_sheet 轉換 rowData 裡的資料成excel worksheet object
    utils.book_append_sheet(wb, ws, "Sheet1"); // 使用 book_append_sheet 將work sheet 加到work book
    writeFile(wb, "membershipRecord.xlsx"); // 使用writeFile 將work book 寫入 excel file
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMembershipThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) {
      paginationClickHandler(1);
    }
  }, [loading, paginationClickHandler]);

  return (
    <>
      <div className="row bg-primary text-white py-3">
        <h1 className="col-12 text-center">MEMBERSHIP RECORDS</h1>
      </div>

      {!loading && (
        <>
          <div className="row mt-5">
            <div className={`col-2  mt-1 text-white ${styles.textLeft}`}>
              <h4>Filter records by: </h4>
            </div>
            <div className={`col-2 ${styles.textLeft}`}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className={` `}
                >
                  {findWay}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#Car" onClick={plateClickHandler}>
                    plate
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#Motorcycle"
                    onClick={usernameClickHandler}
                  >
                    username
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className={`col-2 ${styles.textLeft}`}>
              {findWay === "username" && (
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  type="username"
                  placeholder="search by username"
                />
              )}
              {findWay === "plate" && (
                <input
                  value={plate}
                  onChange={(event) => setPlate(event.target.value)}
                  className="form-control"
                  type="username"
                  placeholder="search by plate"
                />
              )}
            </div>

            <div className={`col-2 ${styles.textLeft}`}>
              <Button onClick={searchClickHandler} variant="warning">
                Search
              </Button>
            </div>

            <div className={`col-3 mr-3 ${styles.textRight}`}>
              <Button
                className="ml-4 mr-2"
                variant="primary"
                onClick={handleExportXLS}
              >
                {<span>Export File</span>}
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </div>

          <div className="row"></div>

          {historyAll.length === 0 && (
            <h3 className={`mt-5 text-white`}>
              There is no such data. Please try again.
            </h3>
          )}
          {historyAll.length !== 0 && (
            <div className="mt-3 row me-4">
              <div className="col-12">
                <Table
                  striped
                  bordered
                  hover
                  className={`mt-1`}
                  variant="light"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Plate Number</th>
                      <th>Expire Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <Posts posts={posts}></Posts>
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </>
      )}
      <Pagination className="justify-content-end me-5">{items}</Pagination>
    </>
  );
};

export default ParkingMembershipRecord;
