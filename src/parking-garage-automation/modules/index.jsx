import React from "react";
import { Modules } from "./Modules";
import {useSelector} from "react-redux";

export const ModulesComponent = () => {
    const {users} = useSelector((state) => state.users)

  return (
    <>
        {  users === "fulfilled"&&
            <Modules />
        }
        {
            users !== "fulfilled"  &&
            <div className="row mt-5 text-white">
                <h1>Please Log In</h1>
            </div>
        }
    </>
  );
};
export default ModulesComponent;
