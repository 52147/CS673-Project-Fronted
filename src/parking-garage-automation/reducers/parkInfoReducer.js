import {createSlice} from "@reduxjs/toolkit";
import {getParkingInfoThunk} from "../../services/parkInfoThunk";

const initialState = {
    loading: false,
    PlateNumber: '',
    EnterTime: '',
    DepartureTime: '',
    TotalParkingTime:'',
    ParkingFee:''
}

const parkInfoSlice = createSlice({
    name: 'parkInfo',
    initialState,
    extraReducers: {
        [getParkingInfoThunk.pending]:
            (state) => {
                state.loading = true
                console.log("pending")
            },
        [getParkingInfoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.PlateNumber = payload.plate
                state.EnterTime = payload.entrance
                state.DepartureTime = payload.exit
                state.TotalParkingTime = payload.totalParkingTime
                state.ParkingFee = payload.parkingFee

                console.log(payload)
            },
        [getParkingInfoThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default parkInfoSlice.reducer