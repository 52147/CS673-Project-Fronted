import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.css";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
      setShowFooter(isBottom);
    };

    const handleResize = () => {
      const isFullHeight =
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight;
      const isShortContent =
        document.documentElement.scrollHeight <= window.innerHeight;
      setShowFooter(isFullHeight || isShortContent);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showFooter && (
        <footer className="bg-stone-800 fixed bottom-0 w-full bottom-0 left-0 right-0">
          <div className="flex justify-center">
            <div
              className={
                styles.box + " bg-stone-700 rounded-lg p-8 md:w-1/2 lg:w-1/3"
              }
            >
              <div className="text-white">
                <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                <p className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faLocation} className="mr-2" />
                  MA, Cambridge, US
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  support@gmail.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
