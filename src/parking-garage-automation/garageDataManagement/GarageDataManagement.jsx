
import { Button, Table, Spinner, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import {
  garageDataManagementThunk
} from "../../services/garageDataManagementThunk";


export const GarageDataManagement = () => {

  const { loading, history} = useSelector((state) => state.history);
  const [active, setActivePage] = useState(1); 

  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!loading) {
  //     paginationClickHandler(1); // 當進入頁面時，paginationClickHandler設定為 1
  //   }
  // }, [loading]);

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

  // useEffect(() => {
  //   console.log("Fetching history...");
  //   dispatch(garageDataManagementThunk());
  // }, [dispatch]);

  return (
  <>
    <div className="row text-white mt-3 mb-3">
    <h1>GARAGE DATA MANAGEMENT</h1>
    </div>
        <div className="row me-4">
            <div className="col-12">
                <Table striped bordered hover className={`mt-1`} variant="light">

                    <thead>
                      <tr>
                        <th>
                        (Remaining Parking Spaces)123
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                        
                        </th>
                      </tr>

                    <tr>
                        <th>Parking Section</th>
                        <th>Bicycle</th>
                        <th>Normal Car</th>
                        <th>Motorcycle</th>
                        <th>Electric Vehicle</th>
                        <th>Bus</th>
                        <th>Disable</th>

                    </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>C</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>D</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                      </tr>

                    {/* <Data posts={posts}></Data> */}
                    </tbody>

                </Table>
            </div>
        </div>


        <div>

            {/* <Pagination className="justify-content-end me-5">{items}</Pagination> */}
            <br/>

        </div>
    </>


  )
}
