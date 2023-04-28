import styles from "./UpdatePassword.module.css";
import { Button} from "react-bootstrap";
import React, { useState } from "react";
export const UpdatePassword = () => {
  let [password, setPassword] = useState("");

  const changePassword = () => {

  };

  return (
    <>
      <div>
        <h1 className="mt-5 text-white">Reset Password</h1>
        <div
          className={`row text-white mx-auto ${styles.line}`}
          style={{ opacity: 0.5 }}
        >
          <hr />
        </div>
        <div className="row mt-4">
          <div className="row">
            <div className={`col-5 mt-1 text-white ${styles.textRight}`}>
              New Password:
            </div>
            <div className={`col-3 ${styles.textLeft}`}>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                type="email"
              />
            </div>
          </div>
        </div>

        <Button
          className={`mt-4  container ${styles.submitButton}`}
          onClick={changePassword}
          variant="warning"
        >
          Reset My Password
        </Button>
      </div>
    </>
  );
};
