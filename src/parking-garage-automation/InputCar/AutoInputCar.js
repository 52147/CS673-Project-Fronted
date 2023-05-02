import React, {useEffect, useState} from "react";
import ParkingFee from "../garage-fee/parkingFee";

const AutoInputCar = ()=>{
    const [webSocketReturnData, setWebSocketReturnData] = useState("");
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080/websocket");

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // const data = {
            //     plate: contact,
            //     Entrance: "true"
            // }
            console.log(data)
            console.log(data.entrance === "false")
            setWebSocketReturnData(data);
            if (!data.entrance) {
                console.log("go")
                window.location.replace(`/information/${data.plate}`);
            }
        }


        return () => {
            ws.close();
        };


    }, []);

    return(
        <div>
            <p>Plate from car plate recognition model: {webSocketReturnData.plate}</p>
            <p>
                Entrance from car plate recognition model: {webSocketReturnData.entrance}
            </p>
        </div>
    )
}

export default AutoInputCar;