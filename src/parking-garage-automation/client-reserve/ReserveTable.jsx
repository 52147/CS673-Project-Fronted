import { React, useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormThunk, clientrecordFormThunk } from "../../services/formThunk";
import { Record } from "./Record";

export const ReserveTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [active, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const { history} = useSelector((state) => state.updateForm);
  const { loading, load, token, users, username } = useSelector((state) => state.users);

  console.log(username);
  useEffect(() => {
    console.log("Fetching history...");
    setPosts(history);
    dispatch(clientrecordFormThunk(username));
  }, [dispatch, username]);


  useEffect(() => {
    setPosts(history);
  }, [history]); // 2. 第二個useEffect，每一次reload頁面，更新 history
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

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Reservation History
      </h1>
      <Table responsive className="w-full md:w-4/5 lg:w-3/4">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">License</th>
            <th className="px-4 py-3">Parklot</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          <Record posts={posts} />
        </tbody>
      </Table>
      <div className="mt-2 d-flex justify-content-center">
        <Pagination className="justify-content-end me-5">{items}</Pagination>
      </div>
    </div>
  );
};
