import {MemoryRouter, useParams} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {render, screen,act} from "@testing-library/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import React from "react";
import ParkingPayment from "../../parking-garage-automation/parking-payment/parking-pay";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer";
import feeManagementReducer from "../../parking-garage-automation/reducers/feeManagementReducer";


let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

import axios from "axios";
jest.mock("axios");
const response1 = {
    code: '000000',
    msg: 'ok',
    data: {
        hour:1
    }
}


axios.get.mockImplementation(url => {
    switch (url) {
        case 'http://localhost:8080/check/index/check/checkIn/checkPrice':
            return Promise.resolve(response1)
    }
})

const store1 = configureStore({
    reducer: {
        parkInfo: parkInfoReducer,
        parkFee: feeManagementReducer,
    }
})

const store2 = ({
    reducer: {
        parkInfo: parkInfoReducer,
        parkFee: feeManagementReducer,
    }
})


describe("pay component",  () => {
    it("when a car want to pay and leave", () => {
        const payInfo=
            {
                from:"parkInfo",
            }

        const initialState = {
            parkInfo: {
                loading: false,
                PlateNumber: 'ABC',
                EnterTime: '2023-01-01T08:00:01',
                DepartureTime: '2023-01-01T09:02:01',
                TotalParkingTime:'62',
                ParkingFee:5,
                msg:'success'
            },
        };
        const testStore = configureStore({
            reducer: store2.reducer,
            preloadedState: initialState,
        });
        render(
            <Provider store={testStore}>
                <MemoryRouter>
                    <ParkingPayment data={ payInfo }/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("5 USD")).toBeInTheDocument();
    });

    it("when a user want to pay and buy a membership", () => {
        const payInfo=
            {
                from:"membership",
                price:200,
                userId:123,
                permitType:"month",
                plate:"ABC",
            }

        render(
            <Provider store={store1}>
                <MemoryRouter>
                    <ParkingPayment data={ payInfo }/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("200 USD")).toBeInTheDocument();
    });



    it("when a user want to pay and reserve a parking plot", () => {

        const payInfo = {
            from: "reservation",
            hour: 2,
            result:"",
            carPlate:"",
            username:"",
            withCarType :{
                id: 123,
                type: 'Car',
            }
        };


        act(() => {
            ReactDOM.createRoot(container).render(
                <Provider store={store1}>
                    <MemoryRouter>
                        <ParkingPayment data={ payInfo }/>
                    </MemoryRouter>
                </Provider>
            );
        });


        expect(screen.getByText("4 USD")).toBeInTheDocument();
    });
});