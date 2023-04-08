import React, {useEffect, useState} from "react";
import {Pagination, Table} from "react-bootstrap";
import Posts from "./Item"
import {useDispatch, useSelector} from "react-redux";
import {getAllMembershipThunk,} from "../../services/membershipThunk";

const ParkingMembershipRecord = () => {
    const {
        historyAll, loading
    } = useSelector((state) => state.parkMembership)
    //console.log(historyAll)


    const [posts, setPosts] = useState([]);
    const [active, setActivePage] = useState(1);

    const paginationClickHandler = React.useCallback((number) => {
        let tempArr = []
        for (let i = number * 10 - 10; i <= number * 10 - 1; i++) {
            if (i < historyAll.length) {
                tempArr.push(historyAll[i]);

            }
        }
        setActivePage(number);
        setPosts(tempArr)
    }, [historyAll]);

    const pageNumbers = Math.ceil(historyAll.length / 10)

    let items = [];
    for (let number = 1; number <= pageNumbers; number++) {
        items.push(
            <Pagination.Item onClick={() => paginationClickHandler(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMembershipThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!loading) {
            paginationClickHandler(1)
        }
    }, [loading, paginationClickHandler])

    return (<>
        <h1 className="mt-3 text-white">
            Membership Records
        </h1>

        {!loading&&
            <div className="mt-3 row me-4">
                <div className="col-12">
                    <Table striped bordered hover className={`mt-1`} variant="light">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Plate Number</th>
                            <th>Expire Date</th>
                        </tr>
                        </thead>

                        <tbody>

                        <Posts posts={posts}></Posts>
                        </tbody>

                    </Table>
                </div>
            </div>
        }
        <Pagination className="justify-content-end me-5">{items}</Pagination>
    </>)

}

export default ParkingMembershipRecord;