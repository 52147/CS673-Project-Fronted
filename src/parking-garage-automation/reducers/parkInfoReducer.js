import {createSlice} from "@reduxjs/toolkit";
import {getThunk} from "../../services/parkInfoThunk";

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
        [getThunk.pending]:
            (state) => {
                state.loading = true
                console.log("pending")
            },
        [getThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.PlateNumber = payload.PlateNumber
                state.EnterTime = payload. EnterTime
                state.DepartureTime = payload.DepartureTime
                state.TotalParkingTime = payload.TotalParkingTime
                state.ParkingFee = payload. ParkingFee

                console.log("**")
                console.log(state.responseMsg)
            },
        [getThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default parkInfoSlice.reducer