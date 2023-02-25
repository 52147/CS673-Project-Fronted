import React, { useState } from 'react'
import styles from './login.module.css'


import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/loginThunk";

export const Login = () => {
  //[current state, function is used to update state]
  // useState(initial state to empty string)
  const {loading, responseMsg, car} = useSelector((state) => state.checkInCars)
  const dispatch = useDispatch()

  const [contact, setContact] = useState({
    userEmail: "",
    userPassword: ""
  });

  const submitUser = ()=>{
    const content = {
      email: contact.userEmail,
      password: contact.userPassword
    }
    console.log(content)

    dispatch(loginThunk(content))

  }

  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { email, value } = event.target;

    setContact((preValue) => {
      return {
        // spread operator(...) : allows us to copy existing array/object into another array/object
        ...preValue,
        [email]: value
      };
    });
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div>
      <div className={styles.container}>
        {/* useState to update first and last name */}
        <h1 className="font-medium">Login {contact.email}</h1>
        <p>{contact.password}</p>
        <form>
          <input
            className={styles.inputClass}
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder="Email"
          />
          <input
            className={styles.inputClass}
            // onchange event: event occurs when value of element has been changed
            onChange={handleChange}
            name="password"
            value={contact.password}
            placeholder="Password"
          />

          <button
            className={styles.buttonClass}
            style={{ background: isMouseOver ? "black" : "white" }}
            // html dom event: onMouseOver, onMouseOut
            // event handling: allows javascript handle html event
            onMouseOver={handleMouseOver} // handleMouseOver function will be executed when Mouse over
            onMouseOut={handleMouseOut}
            onClick={submitUser}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
