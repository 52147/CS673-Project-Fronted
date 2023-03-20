import React, { useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/loginThunk";
import { Button, Modal } from "react-bootstrap";

export const Login = () => {
  const dispatch = useDispatch();
  const { loading, load, token } = useSelector((state) => state.users);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      loginThunk({ username, password })).then((req) => {
        console.log(req.type);
        if(req.type === "/login/rejected"){
          setShow(true);
        }


    })
    console.log(token);
    console.log(load);

  };
  const handleClose = () => setShow(false);



  return (
    <>
      <div className={styles.container}>
        <div className = "mt-12">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <input
              className={styles.inputClass}
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <input
              className={styles.inputClass}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className={styles.buttonClass}
            type="submit"
          >
            Submit
          </button>
        </form>
        </div>
        {load === "fulfilled" && window.location.replace(`/modules`)}
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Incorrect username or password</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your username or password is not correct.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
};
