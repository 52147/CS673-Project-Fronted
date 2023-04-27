import React, { useEffect } from "react";
import styles from "./modules.module.css";
import { garageDataManagementThunk } from "../../services/garageDataManagementThunk";
import { useDispatch, useSelector } from "react-redux";

export const Modules = () => {
  const { loading, history } = useSelector((state) => state.garageData);
  const dispatch = useDispatch();

  const data = [
    {
      id: "1",
      page: "fee",
      topic: "Fee Management",
      cover: "hand.png",
    },
    {
      id: "2",
      page: "garageData",
      topic: "Parking History Management",
      cover: "parked-car.png",
    },
    {
      id: "3",
      page: "autho",
      topic: "Authority Management",
      cover: "policeman.png",
    },
    {
      id: "4",
      page: "garageDataManagement",
      topic: "Parking Space Management",
      cover: "parking (1).png",
    },
    {
      id: "5",
      page: "appointmentmanagement",
      topic: "Reservation Management",
      cover: "booking (1).png",
    },
    {
      id: "6",
      page: "reservemanagement",
      topic: "Parklot Management",
      cover: "parking-lot.png",
    },
    {
      id: "7",
      page: "membership",
      topic: "Membership Management",
      cover: "membership.png",
    },
  ];
  useEffect(() => {
    console.log("Fetching history...");
    dispatch(garageDataManagementThunk());
    console.log(loading);
    console.log(history);
  }, [dispatch]);

  return (
    <>
      <h1 className="mt-4 text-white">
        {" "}
        Remaning Parking Spaces: {history.current_spots}
      </h1>
      <h1 className="text-white">
        {" "}
        Total Parking Spaces: {history.total_spots}
      </h1>
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
                        window.location.replace(`/modules/${value.page}`);
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
