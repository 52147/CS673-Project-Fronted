import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormThunk, resetFormThunk } from "../../services/formThunk";
import { Button, Table } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReserveData } from "./ReserveData";

export const ReserveManagement = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const { history, loading } = useSelector((state) => state.updateForm);

  console.log(history);

  useEffect(() => {
    console.log("Fetching history...");
    dispatch(FormThunk());
  }, [dispatch]); // 1. 一個useEffect，第一次進入頁面，拿 form thunk的資料

  useEffect(() => {
    setPosts(history);
  }, [history]); // 2. 第二個useEffect，每一次reload頁面，更新 history

  const handleSearch = () => {
    const filteredPosts = history.filter((post) => {
      // Convert all fields to strings and join them into a single string
      const rowString = Object.values(post).join("").toLowerCase();

      // Check if the search query is a substring of the row string
      return rowString.includes(searchQuery.toLowerCase());
    });

    setPosts(filteredPosts); // Also update the posts state if needed
  };

  // 清空搜尋紀錄，並重新呈現所有紀錄
  const resetSearch = () => {
    setSearchQuery("");
    setPosts(history);
  };


  const handleReset = () => {
    dispatch(resetFormThunk());
  }

  return (
    <div className="container-fluid">
      <div className="row bg-primary text-white py-3">
        <h1 className="col-12 text-center">PARKING SLOT MANAGEMENT</h1>
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
            <div className="col-md-3">
              <Button variant="primary" onClick={handleReset}>
                Reset
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
              <th>Type</th>
              {[...Array(24).keys()].map((i) => (
                <th key={`a${i + 1}`}>A{i + 1}</th>
              ))}
              {[...Array(24).keys()].map((i) => (
                <th key={`b${i + 1}`}>B{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <ReserveData posts={posts} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};
