import React, { useState } from 'react'
import styles from './inputCar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {checkInCarThunk} from "../../services/inputCarThunk";
import { redirect } from "react-router-dom";


export const InputCar = () => {
  //[current state, function is used to update state]
  // useState(initial state to empty string)
  const {loading, responseMsg, car} = useSelector((state) => state.checkInCars)
  const [contact, setContact] = useState("");
  const dispatch = useDispatch()
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

  const submitPlateHandler = async()=>{
    const content = {
      plate: contact
    }
    console.log(content)


    await dispatch(checkInCarThunk(content))
      .then((req) => { 
        if(req.payload.content.Entrance === "false"){
          window.location.replace(`/information/${contact}`)
        }
        console.log(req.payload.content.Entrance) })
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
        {
          // !loading && <p>{responseMsg}</p>
        }
        {
          loading && <p>loading = true</p>
        }


        <p>{contact}</p>
          <input
            className={styles.inputClass}
            // onchange event: event occurs when value of element has been changed
            onChange={(event) => setContact(event.target.value)}
            name="carNumber"
            value={contact}
            placeholder="Car Number"
          />
          <button
            className={styles.buttonClass}
            style={{ background: isMouseOver ? "black" : "white" }}
            // html dom event: onMouseOver, onMouseOut
            // event handling: allows javascript handle html event
            onMouseOver={handleMouseOver} // handleMouseOver function will be executed when Mouse over
            onMouseOut={handleMouseOut}
            onClick={submitPlateHandler}
          >
            Submit
          </button>
      </div>
    </div>
  );
}
