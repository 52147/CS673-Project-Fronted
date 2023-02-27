import {createSlice} from "@reduxjs/toolkit";
import {getParkingInfoThunk} from "../../services/parkInfoThunk";

const initialState = {
    loading: false,
    PlateNumber: '',
    EnterTime: '',
    DepartureTime: '',
    TotalParkingTime:'',
    ParkingFee:'',
    msg:''
}

const parkInfoSlice = createSlice({
    name: 'parkInfo',
    initialState,
    extraReducers: {
        [getParkingInfoThunk.pending]:
            (state) => {
                state.loading = true
                // console.log("pending")
            },
        [getParkingInfoThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.PlateNumber = payload.content.parkInfo.plate
                if(payload.content.parkInfo.entrance !=null){state.EnterTime = payload.content.parkInfo.entrance.substring(0,19)}
                if(payload.content.exit !=null){state.DepartureTime = payload.content.exit.substring(0,19)}
                state.TotalParkingTime = payload.content.parkingtime
                state.ParkingFee = payload.content.parkingFee
                state.msg = 'success'
                // console.log(payload)
            },
        [getParkingInfoThunk.rejected]:
            (state) => {
                state.loading = false
                state.msg = 'fail'
                console.log("reject" )
            }



    },

    reducers: {
        //...
    }

});

export default parkInfoSlice.reducer