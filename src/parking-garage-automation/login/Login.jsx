import React, { useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../services/loginThunk";

export const Login = () => {
  const { loading, users } = useSelector(
    (state) => state.submitUser
  );
  const dispatch = useDispatch();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const submitUser = async () => {
    console.log(username);
    console.log(password);

    await dispatch(loginThunk({ username, password })).then((req) => {
      // console.log(Object.is(req.payload, "fulfilled"));
      if(users === "fulfilled"){
        window.location.replace(`/modules`);
      }
    });
  };

  const [isMouseOver, setMouseOver] = useState(false);

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
        <h1 className="font-medium">Login {username}</h1>
        <p>{password}</p>
        {
          // !loading && <p>{responseMsg}</p>
        }
        {loading && <p>loading = true</p>}
        <div>
          <input
            className={styles.inputClass}
            onChange={(event) => setUsername(event.target.value)}
            name="email"
            value={username}
            placeholder="Email"
          />
          <input
            className={styles.inputClass}
            // onchange event: event occurs when value of element has been changed
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            value={password}
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
        </div>
      </div>
    </div>
  );
};
