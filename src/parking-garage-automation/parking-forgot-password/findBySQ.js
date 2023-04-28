import styles from "../parking-register/register.module.css";
import {Button, Modal, Nav} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import { useSelector} from "react-redux";


const FindBySQ = ({setValue}) => {
    const { user} = useSelector((state) => state.forgetPassword)

    const data = [
        {
            id: '1',
            question: "What is your mother's maiden name?",
        }, {
            id: '2',
            question: "What is your favorite color?",
        }, {
            id: "3",
            question: "What was the name of your first pet?",
        }, {
            id: "4",
            question: "In what city were you born?",
        }, {
            id: "5",
            question: "What is the name of your favorite teacher?",
        }, {
            id: "6",
            question: "What is the name of the street you grew up on?",
        }, {
            id: "7",
            question: "What was your first car?",
        }, {
            id: "8",
            question: "What is the name of your favorite sports team?",
        }, {
            id: "9",
            question: "What was your high school mascot?",
        }, {
            id: "10",
            question: "What is your favorite book?",
        },
    ];

    const [question, setQuestion] = useState(1);
    const [securityAnswer1, setSecurityAnswer1] = useState('');
    const [securityAnswer2, setSecurityAnswer2] = useState('');

    const sq1 = data.find(sq => sq.id === user.q1);
    const sq2 = data.find(sq => sq.id === user.q2);

    const changeQuestionClickHandler = () => {
        if(question == 1){
            setQuestion(2)
        }else if(question == 2){
            setQuestion(1)
        }
    }
    const navigate = useNavigate()
    const navSignUp = () => {
        navigate('/register');
    }


    const [errorShow, setErrorShow] = useState(false);
    const errorHandlerClose = () => {
        setErrorShow(false)
    };
    const errorHandlerShow = () => {
        setErrorShow(true);
    }


    const submitClickHandler = () => {
        if(securityAnswer1 === user.a1 || securityAnswer2 === user.a2){
            setValue('reset')
        }else{
            errorHandlerShow()
        }
    }


    return (<>
        { question === 1 &&<>
            <div className="row mt-4">
                <div className={`col-4 text-white mt-3 ${styles.textRight}`}>
                    Security Question 1:
                </div>
                <div className={`col-4 text-white mt-3 ${styles.textLeft}`}>
                    <h5>{sq1.question}</h5>
                </div>
                <Button className={` col-1  ${styles.textLeft}`} onClick={changeQuestionClickHandler}
                        variant="secondary">Change Question</Button>
            </div>

            <div className="row mt-3">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Answer:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <input value={securityAnswer1} onChange={(event) => setSecurityAnswer1(event.target.value)}
                           className="form-control"/>
                </div>
            </div>
        </>}

        { question === 2 &&<>
            <div className="row mt-4">
                <div className={`col-4 text-white mt-3 ${styles.textRight}`}>
                    Security Question 2:
                </div>
                <div className={`col-4 text-white mt-3 ${styles.textLeft}`}>
                    <h5>{sq2.question}</h5>
                </div>
                <Button className={` col-1  ${styles.textLeft}`} onClick={changeQuestionClickHandler}
                        variant="secondary">Change Question</Button>
            </div>

            <div className="row mt-3">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Answer:
                </div>
                <div className={`col-5 ${styles.textLeft}`}>
                    <input value={securityAnswer2} onChange={(event) => setSecurityAnswer2(event.target.value)}
                           className="form-control"/>
                </div>
            </div>
        </>}

        <Button className={`mt-5  container ${styles.submitButton}`} onClick={submitClickHandler}
                variant="warning">Submit</Button>
        <Nav.Link className={`mt-4 text-white`} onClick={navSignUp}>sign up?</Nav.Link>

        <Modal
            show={errorShow}
            onHide={errorHandlerClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body> Wrong answer, please try again!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={errorHandlerClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>)

}

export default FindBySQ;