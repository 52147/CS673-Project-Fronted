import {render, screen} from "@testing-library/react";
import {Provider, useDispatch} from "react-redux";
import {MemoryRouter, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {configureStore} from "@reduxjs/toolkit";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer";
import ParkingInformation from "../../parking-garage-automation/parking-information/parking-info";



const store1 = configureStore({
    reducer: {
        parkInfo: parkInfoReducer
    }
})

const store2 = ({
    reducer: {
        parkInfo: parkInfoReducer
    }
})

// Mock the useParams function
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(), // Mock the useParams function
}));



describe("info component",  () => {
    it("when plates: 123 is not in the garage", () => {
        useParams.mockReturnValue({ plates: '123' });
        render(
            <Provider store={store1}>
                <MemoryRouter>
                    <ParkingInformation />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("123 Dose Not Exist.")).toBeInTheDocument();
    });




    it("when plates: ABC is in the garage",  () => {
        useParams.mockReturnValue({ plates: 'ABC' });

        const initialState = {
            parkInfo: {
                loading: false,
                PlateNumber: 'ABC',
                EnterTime: '2023-01-01T08:00:01',
                DepartureTime: '2023-01-01T08:02:01',
                TotalParkingTime:'2',
                ParkingFee:0,
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
                    <ParkingInformation />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("Parking Information")).toBeInTheDocument();
        expect(screen.getByText("ABC")).toBeInTheDocument();
        expect(screen.getByText("2023-01-01T08:00:01")).toBeInTheDocument();
        expect(screen.getByText("2023-01-01T08:02:01")).toBeInTheDocument();
        expect(screen.getByText("0 hour 2 min")).toBeInTheDocument();
        expect(screen.getByText("0 USD")).toBeInTheDocument();
    });
});

