import {Button, ButtonGroup, DropdownButton, Dropdown, Form, Table, Pagination} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from './garage-data.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getHistoryThunk} from "../../services/parkHistoryThunk";
import Posts from "./Item";

const GarageData  = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);


    const {
        loading,
        history
    } = useSelector((state) => state.parkHistory)

    useEffect(() => {
       dispatch(getHistoryThunk())
    }, []);
    let tempArr = []
    const paginationClickHandler = (number) =>{
        tempArr = []
        for(let i = number*10-10; i<=number*10-1; i++){
            console.log(i)
            tempArr.push(history[i]);
        }
        setTimeout(()=>{
            setPosts(tempArr)
        },5)
        console.log(posts)
    }
// Get current posts
    const pageNumbers = Math.ceil(history.length/10)
    let active = 1;
    let items = [];
    for (let number = 1; number <= pageNumbers; number++) {
        items.push(
            <Pagination.Item onClick={() => paginationClickHandler(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    const rows = [];
    for (let i = 1; i <= pageNumbers; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<li>
            {i}
        </li>);
    }
    return (<>
            <div className="row">
                <div className={`col-1 text-white ${styles.textRight}`}>
                    <h3>From: </h3>
                </div>
                <div className={`col-1  ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example">
                        <option>DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1  ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example2">
                        <option>MM</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example3">
                        <option>YYYY</option>
                        <option value="1">2023</option>
                        <option value="2">2024</option>
                        <option value="3">2025</option>
                    </Form.Select>
                </div>
                <div className={`col-1 text-white ${styles.textRight}`}>
                    <h3>To: </h3>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example">
                        <option>DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example2">
                        <option>MM</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className={`col-1 ${styles.textLeft}`}>
                    <Form.Select aria-label="Default select example3">
                        <option>YYYY</option>
                        <option value="1">2023</option>
                        <option value="2">2024</option>
                        <option value="3">2025</option>
                    </Form.Select>
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




            <div >

                    <Pagination className="justify-content-end me-5">{items}</Pagination>
                    <br />

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )


}
export default GarageData;
