import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.box}>

            <div className={styles.icon}>
              <h2>Get in Touch</h2>
              <p><FontAwesomeIcon icon={faLocation} />
                &nbsp; MA, Cambridge, US</p>
              <p><FontAwesomeIcon icon={faEnvelope} />
                &nbsp; support@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
