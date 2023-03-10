import React from "react";
import styles from "./modules.module.css";

export const Modules = () => {
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
  ];

  return (
    <>
      <div className={`container ${styles.block}`}>
        <div className={`flex row ${styles.group}`}>
          {data.map((value) => {
            return (
              <>
                <div className={`col-4 ${styles.card}`}>
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
