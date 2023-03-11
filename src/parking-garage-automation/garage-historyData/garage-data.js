import {Button, Table, Pagination, Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from './garage-data.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getHistoryThunk} from "../../services/parkHistoryThunk";
import Posts from "./Item";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const GarageData = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());
    const [active, setActivePage] = useState(1); 

    const searchClickHandler = () => {

    }

    const {
        loading,
        history,
    } = useSelector((state) => state.parkHistory)

    useEffect(() => {
        dispatch(getHistoryThunk())
    }, []);

    useEffect(() => {
        if (!loading) {
            paginationClickHandler(1)
        }
    }, [loading])

    let tempArr = []
    const paginationClickHandler = (number) => {
        tempArr = []
        for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
            if (i < history.length) {
                tempArr.push(history[i]);
            }
        }
        setActivePage(number);
        setPosts(tempArr)

    }


    const pageNumbers = Math.ceil(history.length / 10)
    let items = [];
    for (let number = 1; number <= pageNumbers; number++) {
        items.push(
            <Pagination.Item onClick={() => paginationClickHandler(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }



    return (<>
            {
                loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden mt-5">Loading...</span>
                </Spinner>
            }{
            !loading && <>

                <div className="row">
                    <div className={`col-1 text-white ${styles.textRight}`}>
                        <h3>From: </h3>
                    </div>
                    <div className="col-2 mt-2">
                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className={`col-1 text-white ${styles.textRight}`}>
                        <h3>To: </h3>
                    </div>
                    <div className="col-2 mt-2">
                        <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)}/>
                    </div>
                    <div className="col-2 ">
                        <Button onClick={searchClickHandler} variant="warning">Search</Button>
                    </div>


                </div>
                <div className="row me-4">
                    <div className="col-12 mt-3">
                        <Table striped bordered hover className={`mt-2`}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Plate Number</th>
                                <th>Enter Time</th>
                                <th>Exit Time</th>
                                <th>price</th>
                            </tr>
                            </thead>

                            <tbody>

                            <Posts posts={posts}></Posts>
                            </tbody>

                        </Table>
                    </div>
                </div>


                <div>

                    <Pagination className="justify-content-end me-5">{items}</Pagination>
                    <br/>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </>
        }
        </>
    )


}
export default GarageData;
