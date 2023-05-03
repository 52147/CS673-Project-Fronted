import Mock from 'mockjs';

let data_success =
    {
        content: {
            parkinfo: {
                plate: "ABC",
                entrance: "2023-01-01T08:00:01.994+00:00",

            },
            exit: "2023-01-01T08:02:01.994+00:00",
            parking_time: 2,
            parkingFee: 0
        },
        msg: "success"

    };

let data_error =
    {
        content: {
            parkinfo: {
                plate: '',
                entrance: '',
            },
            exit: '',
            parking_time: '',
            parkingFee: '',
        },
        msg: "fail"

    };

const COMMENTS_API = 'http://localhost:8080'
export default Mock.mock(
    COMMENTS_API + "/index/check/checkPlate/mock", 'post',
    (req) => {
        console.log(req)
        let req_data = JSON.parse(req.body)
        if (req_data.plate === "ABC") {
            console.log(data_success)
            return data_success;

        }
        console.log(data_error)
        return data_error;
    }
)
