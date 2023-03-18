import {Button, Table, Pagination, Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from './garage-data.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getHistoryThunk, getSelectedHistoryThunk} from "../../services/parkHistoryThunk";
import Posts from "./Item";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const GarageData = () => {
    //const {currentUser} = useSelector((state) => state.submitUser)
    const [posts, setPosts] = useState([]);
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());
    const [active, setActivePage] = useState(1); 

    const {
        loading,
        history,
    } = useSelector((state) => state.parkHistory)



    const date = {
        startDate: startDate,
        endDate: endDate
    };

    const dispatch = useDispatch();
    const searchClickHandler = () => {
        console.log(date)
        dispatch(getSelectedHistoryThunk(date))
    }


    const paginationClickHandler =   React.useCallback((number) => {
        let tempArr = []
        for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
            if (i < history.length) {
                tempArr.push(history[i]);
            }
        }
        setActivePage(number);
        setPosts(tempArr)
    },[history]);

    const pageNumbers = Math.ceil(history.length / 10)

    let items = [];
    for (let number = 1; number <= pageNumbers; number++) {
        items.push(
            <Pagination.Item onClick={() => paginationClickHandler(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    useEffect ( () => {
        const first = async ()=>{
            await dispatch(getHistoryThunk())
            paginationClickHandler(1)
        }
        first()

    }, [dispatch,paginationClickHandler]);

    // useEffect(() => {
    //     if (!loading) {
    //         paginationClickHandler(1)
    //     }
    // }, [loading,paginationClickHandler])

    return (<>
        <div className="row text-white mt-3 mb-3">
            <h1>PARKING HISTORY </h1>
        </div>
            {/*{*/}
            {/*    currentUser == null &&*/}
            {/*    <div className="row text-white mt-5 mb-3">*/}
            {/*    <h1>Please Log In </h1>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*}*/}
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
                    <div className={`col-2 mt-2 ${styles.textLeft}`}>
                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className={`col-1 text-white ${styles.textRight}`}>
                        <h3>To: </h3>
                    </div>
                    <div className={`col-2 mt-2 ${styles.textLeft}`}>
                        <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)}/>
                    </div>
                    <div className={`col-2 ${styles.textLeft}`}>
                        <Button onClick={searchClickHandler} variant="warning">Search</Button>
                    </div>


                </div>
                <div className="row me-4">
                    <div className="col-12">
                        <Table striped bordered hover className={`mt-1`} variant="light">
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
