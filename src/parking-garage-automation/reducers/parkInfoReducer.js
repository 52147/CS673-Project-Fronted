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
                state.PlateNumber = payload.plate
                state.EnterTime = payload.entrance
                state.DepartureTime = payload.exit
                state.TotalParkingTime = payload.TotalParkingTime
                state.ParkingFee = payload.payAmount

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