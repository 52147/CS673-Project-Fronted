import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {parkingRegisterThunk} from "../../services/registerThunk";
import DatePicker from "react-datepicker";
import $ from 'jquery';
import styles from "../parking-register/register.module.css";
import {Button} from "react-bootstrap";


const ParkingRegister = () => {
    const {loading, msg} = useSelector((state) => state.parkRegister)
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState('');
    let [startDate, setStartDate] = useState(new Date());
    let [phoneNumber, setPhoneNumber] = useState('');

    const dispatch = useDispatch();

    const signUpClickHandler = () => {
        let gender = $('#gender').val();
        let role = 1;
        let date = startDate.getFullYear() + "-" + (1 + startDate.getMonth()) + "-" + startDate.getDate();
        const newUser = {
            username: userName,
            password: password,
            Email: email,
            Address: address,
            DateOfBirth: date,
            Gender: gender,
            PhoneNumber: phoneNumber,
            role: role
        }
        console.log(newUser);
        dispatch(parkingRegisterThunk(newUser));
        resetFields();

    }
    const resetFields = () => {
        setUserName('');
        setPassword('');
        setStartDate(new Date());
        setEmail('');
        setAddress('');
        setPhoneNumber('');
    }

    return (<>
            <h1 className="mt-5 text-white">
                Sign up your account!
            </h1>

            <div className="row mt-5">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    UserName:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={userName} onChange={(event) => setUserName(event.target.value)}
                           className="form-control" type="text"/>
                </div>

                <div className={`col-1 mt-1 text-white ${styles.textRight}`}>
                    Password:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={password} onChange={(event) => setPassword(event.target.value)}
                           className="form-control" type="password"/>
                </div>
            </div>

            <div className="row mt-5">
                <div className={`col-4 text-white ${styles.textRight}`}>
                    Date of Birth:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
                </div>
                <div className={`col-1 text-white ${styles.textRight}`}>
                    Gender:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <select name="gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>

            <div className="row mt-5">
                <div className={`col-4 mt-1 text-white ${styles.textRight}`}>
                    Phone Number:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}
                           className="form-control" type="tel"/>
                </div>

                <div className={`col-1 mt-1 text-white ${styles.textRight}`}>
                    Email:
                </div>
                <div className={`col-2 ${styles.textLeft}`}>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} className="form-control"
                           type="email"/>
                </div>
            </div>

            <div className="row mt-4 ">
                <div className={`col-4 text-white ${styles.textRight}`}>
                    Address:
                </div>
                <div className={`col-3 ${styles.textLeft}`}>
                     <textarea value={address} onChange={(event) => setAddress(event.target.value)}
                               className="form-control border-1">
                    </textarea>
                </div>
            </div>


            <Button className={`mt-3  container ${styles.submitButton}`} onClick={signUpClickHandler}
                    variant="warning">Submit</Button>
        </>
    )

}

export default ParkingRegister;