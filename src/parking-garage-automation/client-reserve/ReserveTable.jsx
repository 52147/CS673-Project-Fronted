import { React, useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clientrecordFormThunk } from "../../services/formThunk";
import { Record } from "./Record";

export const ReserveTable = () => {
  const [posts, setPosts] = useState([]);
  const [active, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.updateForm);
  const { username } = useSelector((state) => state.users);

  console.log(username);
  // 第一個useEffect，從後端抓資料
  useEffect(() => {
    console.log("Fetching history...");
    dispatch(clientrecordFormThunk(username));
  }, [dispatch, username]);

  // 第二個useEffect，更新資料到pagination第一頁
  useEffect(() => {
    setPosts(history);
    paginationClickHandler(1);
  }, [history]);

  let tempArr = [];
  const paginationClickHandler = (number) => {
    tempArr = [];
    for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
      if (i < history.length) {
        tempArr.push(history[i]);
      }
    }
    setActivePage(number);
    setPosts(tempArr);
  };

  const pageNumbers = Math.ceil(history.length / 10);
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
