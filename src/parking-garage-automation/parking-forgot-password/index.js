import ForgotPassword from "./forgot";
import {useSelector} from "react-redux";
import InputUsername from "./inputUsername";
import React from "react";
import styles from "./forgetP.module.css";
import {Card} from "react-bootstrap";
import InputEmail from "./imputEmail";


const ForgotPasswordComponent = () => {
    // const {loading, msg} = useSelector((state) => state.forgetPassword)

    return(

        <div>
            <h1 className="mt-5 text-white">
                Reset Password
            </h1>
            <div className={`row text-white mx-auto ${styles.line}`} style={{ opacity: 0.5 }}>
                <hr />
            </div>
            <div className={` row  ${styles.content}`}>
                <Card
                    bg={'Light'.toLowerCase()}
                    key={'Light'}
                    text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '25rem' }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Text >
                            Forgotten your password? Enter your e-mail address below,
                            and we'll send you an e-mail allowing you to reset it.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <InputEmail></InputEmail>

            {/* {*/}
            {/*    msg ===''&& <InputUsername></InputUsername>*/}
            {/*}*/}
            {/*{*/}
            {/*    msg !==''&& <ForgotPassword></ForgotPassword>*/}
            {/*}*/}

        </div>
    )

}

export default ForgotPasswordComponent;