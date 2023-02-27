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
                if(payload.entrance !=null){state.EnterTime = payload.entrance.substring(0,19)}
                if(payload.exit !=null){state.DepartureTime = payload.exit.substring(0,19)}
                state.TotalParkingTime = payload.totalParkingTime
                state.ParkingFee = payload.parkingFee

                console.log(payload)
            },
        [getParkingInfoThunk.rejected]:
            (state) => {
                state.loading = false
                console.log("reject" )
            }



    },

    reducers: {
        //...
    }

});

export default parkInfoSlice.reducer