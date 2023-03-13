import React, { useState, useEffect } from "react";
import { Post } from "./Post";
import { utils, writeFile } from 'xlsx';

import { Button, Table, Spinner, Pagination } from "react-bootstrap";
import {
  faSearch,
  faPlus,
  faUpload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  importAuthorityThunk,
} from "../../services/authorityThunk";
import { useDispatch, useSelector } from "react-redux";

export const Autho = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { loading, history} = useSelector((state) => state.history);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");
  const [file, setFile] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [posts, setPosts] = useState([]);
  const [active, setActivePage] = useState(1); 

  useEffect(() => {
    if (!loading) {
      paginationClickHandler(1); // 當進入頁面時，paginationClickHandler設定為 1
    }
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

  useEffect(() => {
    console.log("Fetching history...");
    dispatch(AuthorityThunk());
  }, [dispatch]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async (event) => {
    const formData = new FormData();
    formData.append("file", file);

    dispatch(importAuthorityThunk(formData));
    console.log(formData);
    window.location.reload();
  };

  // https://jsfiddle.net/jossef/m3rrLzk0/
  const exportToCsv = (filename, rows) => {
    let processRow = function (row) {
      let finalVal = '';
      for (let j = 0; j < row.length; j++) {
        let innerValue = row[j] === null ? '' : row[j].toString();
        if (row[j] instanceof Date) {
          innerValue = row[j].toLocaleString();
        };
        let result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) {
          result = '"' + result + '"';
        }
        if (j > 0) {
          finalVal += ',';
        }
        finalVal += result;
      }
      return finalVal + '\n';
    };

    let csvFile = '';
    for (let i = 0; i < rows.length; i++) {
      csvFile += processRow(rows[i]);
    }

    let blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      let link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  const handleExportXLS = () =>{
    let rowData = [['id', 'username', 'password', 'role']]; // 設置column名
    history.forEach(data => { // 製造一個新的array，加上資料和column
      rowData.push([
        data.id,
        data.username,
        data.password,
        data.role
      ])
    });
    const wb = utils.book_new(); // 製造一個excel work book(workbook裡可以有很多worksheet，work sheet 為 excel file裡面的一個表)
    const ws = utils.aoa_to_sheet(rowData); // 用aoa_to_sheet 轉換 rowData 裡的資料成excel worksheet object
    utils.book_append_sheet(wb, ws, 'Sheet1');  // 使用 book_append_sheet 將work sheet 加到work book
    writeFile(wb, 'data.xlsx'); // 使用writeFile 將work book 寫入 excel file
  }

  const handleExport = async () => {
    let rowData = [['id', 'username', 'password', 'role']];
    history.forEach(data => {
      rowData.push([
        data.id,
        data.username,
        data.password,
        data.role
      ])
    });
    exportToCsv('export.csv', rowData);
  };

  const handleSearch = () => {
    const filteredPosts = history.filter((post) =>
      post.id.toString().includes(searchQuery)
    );
    setPosts(filteredPosts);
  };

  const handleCreateUser = () => {
    dispatch(
      updateAuthorityThunk({
        username: newUsername,
        password: newPassword,
        role: newRole,
      })
    );
    setNewUsername("");
    setNewPassword("");
    setNewRole("");
    window.location.reload();
  };

  return (
    <>
      <div className="input-group">
        <input
          className="pl-3.5"
          placeholder="Search ID"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mr-5 input-group-append">
          <Button
            className="ml-4"
            variant="outline-primary"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <Button
          className="ml-4"
          variant="outline-primary"
          onClick={handleImport}
        >
          Upload File
          <FontAwesomeIcon icon={faUpload} />
        </Button>
        <Button
          className="ml-4"
          variant="outline-primary"
          onClick={handleExportXLS}
        >
          {exporting ? <span>Exporting...</span> : <span>Export File</span>}
          <FontAwesomeIcon icon={faDownload} />
        </Button>
      </div>
      <div className="row me-4">
        <div className="col-12 mt-3 text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateUser();
            }}
          >
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faPlus} />
              Create User
            </Button>
          </form>
          <p>Total Data: {history.length} data</p>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Table striped bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <Post posts={posts}></Post>
              </tbody>
            </Table>
          )}
          <div className="mt-2 d-flex justify-content-center">
            <Pagination className="justify-content-end me-5">
              {items}
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
