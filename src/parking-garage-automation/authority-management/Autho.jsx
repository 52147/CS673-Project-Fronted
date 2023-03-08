import React, { useState, useEffect } from "react";
import { Button, Table, Pagination, Spinner } from "react-bootstrap";
import { faSearch, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthorityThunk } from "../../services/authorityThunk";
import { useDispatch, useSelector } from "react-redux";

export const Autho = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const { loading, history } = useSelector((state) => state.parkHistory);

  useEffect(() => {
    dispatch(AuthorityThunk());

    const tempArr = [];
    tempArr.push(history);

    setPosts(tempArr);
  }, []);

  return (
    <>
      <div class="input-group">
        <input
          className="pl-3.5"
          placeholder="Search ID"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <div className="mr-5 input-group-append">
          <Button className="ml-4" cvariant="outline-primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>

      <div className="row me-4">
        <div className="col-12 mt-3">
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div>
        <Pagination className="justify-content-end me-5"></Pagination>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
