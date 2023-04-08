import styles from "./forgetP.module.css";
import {Button, Card, Nav} from "react-bootstrap";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import crypto from "crypto";
import { useDispatch, useSelector } from "react-redux";
// import {resetPasswordEmail} from "../../actions/usersActions";
import { useNavigate } from "react-router";

const InputEmail = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.users);

  let [email, setEmail] = useState("");
  const emailRef = useRef();

  const navigate = useNavigate();

  const navRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const resetLink = generateResetLink(email);
    sendPasswordResetEmail(email, resetLink);
    // dispatch(resetPasswordEmail(email, resetLink));

  };

  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const url = process.env.REACT_APP_APP_URL;
  console.log(url);

  console.log(USER_ID);
  function generateResetLink(email) {
    const timestamp = new Date().getTime();
    return `${url}/reset-password?token=${token}`;
  }
// ${url}/reset-password?token=${token}&timestamp=${timestamp}
  
  const sendPasswordResetEmail = (email, resetLink) => {
    console.log(resetLink)
    const templateParams = {
      user_email: email,
      message: "Please click the link to reset your password.",
      reset_link: resetLink,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        console.log("Password reset email sent successfully:", result.text);
        alert("Password reset email sent successfully.");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Error sending password reset email.");
      });
  };

  return (
    <>
      <div className={`row text-white mx-auto ${styles.line}`} style={{ opacity: 0.5 }}>
        <hr />
      </div>
      <div className={` row  ${styles.content}`}>
        <Card
            bg={'Light'.toLowerCase()}
            key={'Light'}
            text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '25rem' }}
            className="mb-2"
        >
          <Card.Body>
            <Card.Text >
              Forgotten your password? Enter your e-mail address below,
              and we'll send you an e-mail allowing you to reset it.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="row mt-4">
        <div className="row">
          <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
            e-mail:
          </div>
          <div className={`col-3 ${styles.textLeft}`}>
            <input
              ref={emailRef}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              type="email"
            />
          </div>
        </div>
      </div>

      <Button
        className={`mt-4  container ${styles.submitButton}`}
        onClick={handleSubmit}
        variant="warning"
      >
        Reset My Password
      </Button>

      <Nav.Link className={`mt-4 text-white`} onClick={navRegister}>
        sign up?
      </Nav.Link>
    </>
  );
};

export default InputEmail;
