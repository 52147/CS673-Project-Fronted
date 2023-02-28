import React, { useState } from "react";
import { Button, Table, Pagination, Spinner } from "react-bootstrap";
import { faSearch, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Autho = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

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
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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
