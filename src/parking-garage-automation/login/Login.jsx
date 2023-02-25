import React, { useState } from 'react'
import styles from './login.module.css'
export const Login = () => {
  //[current state, function is used to update state]
  // useState(initial state to empty string)
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        // spread operator(...) : allows us to copy existing array/object into another array/object
        ...preValue,
        [name]: value
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
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
