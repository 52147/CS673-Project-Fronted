import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <>
      <footer className="bg-stone-800 fixed bottom-0 w-100">
        <div className="flex justify-center">
          <div className={styles.box}>
            <div className="text-white">
              <h2>Get in Touch</h2>
              <p>
                <FontAwesomeIcon icon={faLocation} />
                &nbsp; MA, Cambridge, US
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; support@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
