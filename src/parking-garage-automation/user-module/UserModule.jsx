import React, { useState, useEffect } from "react";
import styles from "./modules.module.css";
// import { garageDataManagementThunk } from "../../services/garageDataManagementThunk";
import { useDispatch, useSelector } from "react-redux";

export const UserModule = () => {
  const { loading, history } = useSelector((state) => state.garageData);
  const dispatch = useDispatch();

  const data = [
    {
      id: "1",
      page: "form",
      topic: "Reservation Form",
      cover: "reserve.png",
    },
    {
      id: "2",
      page: "reserveTable",
      topic: "Reservation Record",
      cover: "booking.png",
    },
    {
      id: "3",
      page: "autho",
      topic: "Membership",
      cover: "premium.png",
    },

  ];
  // useEffect(() => {
  //   console.log("Fetching history...");
  //   dispatch(garageDataManagementThunk());
  //   console.log(loading);
  //   console.log(history);
  // }, [dispatch]);

  return (
    <>
      <h1 className= "mt-4 text-white">Client Module</h1>
      <div className={`container ${styles.block}`}>
        <div className={`flex row ${styles.group}`}>
          {data.map((value) => {
            return (
              <>
                <div className={`col-3 ${styles.card}`}>
                  <img className={styles.image} src={value.cover} alt="" />
                  <div className={styles.info}>
                    <h2 className={styles.title}>{value.topic}</h2>
                  </div>
                  <div className={styles.block}>
                    <button
                      onClick={() => {
                        window.location.replace(`/usermodule/${value.page}`);
                      }}
                      className={styles.buttonClass}
                    >
                      Go To
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
