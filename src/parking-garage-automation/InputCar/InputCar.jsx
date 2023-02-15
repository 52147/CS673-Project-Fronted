import React, { useState } from 'react'

import styles from './inputCar.module.css'

export const InputCar = () => {
  //[current state, function is used to update state]
  // useState(initial state to empty string)
  const [contact, setContact] = useState({
    carNumber: "",
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
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>
          Input Plate License Number 
        </h1>
        <p>{contact.carNumber}</p>
        <form>
          <input
            className={styles.inputClass}
            // onchange event: event occurs when value of element has been changed
            onChange={handleChange}
            name="carNumber"
            value={contact.carNumber}
            placeholder="Car Number"
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
