import React from "react";
import { Modules } from "./Modules";
import { useSelector } from "react-redux";

export const ModulesComponent = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <>
      {(users.role === 1 || users.role === 2) && <Modules />}

      {users.role === 3 && (
        <div className="row mt-5 text-white">
          <h1>Only Administrators Can Access！</h1>
        </div>
      )}

      {users.role !== 1 && users.role !== 2 && users.role !== 3 && (
        <div className="row mt-5 text-white">
          <h1>Please Log In!</h1>
        </div>
      )}
    </>
  );
};
export default ModulesComponent;
