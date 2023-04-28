import InputUsername from "./inputUsername";
import React, {useState} from "react";
import FindBySQ from "./findBySQ";
import styles from "./forgetP.module.css";
import {Card} from "react-bootstrap";
import {UpdatePassword} from "./updatePassword";


const ForgotPasswordComponent = () => {
    // const {loading, msg} = useSelector((state) => state.forgetPassword)
    const [value, setValue] = useState('username');

    // const [text, setText] = useState('');
    // if(value === 'username'){
    //     setText('Forgotten your password? Enter your username below, and answer security question to reset your password, or reset by e-mail address')
    // }else if(value === 'sq'){
    //     setText('Forgotten your password? Enter your e-mail address below, and answer security question to reset your password.')
    // }
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
                    style={{ width: '30rem' }}
                    className="mb-2"
                    border="warning"
                >
                    <Card.Body>
                        <Card.Text >
                            Forgotten your password? Enter your username below,
                            and answer security question to reset your password,
                            or reset by default e-mail address
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            {
                value === 'username'&& <InputUsername setValue = {setValue}></InputUsername>
            }
            {
                value === 'sq'&& <FindBySQ setValue = {setValue}></FindBySQ>
            }
            {
                value === 'reset'&& <UpdatePassword setValue = {setValue}></UpdatePassword>
            }

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