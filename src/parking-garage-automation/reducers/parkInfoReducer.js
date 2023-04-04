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
                state.PlateNumber = payload.content.parkinfo.plate
                if(payload.content.parkinfo.entrance !=null){state.EnterTime = payload.content.parkinfo.entrance.substring(0,19)}
                if(payload.content.exit !=null){state.DepartureTime = payload.content.exit.substring(0,19)}
                state.TotalParkingTime = payload.content.parking_time
                state.ParkingFee = payload.content.parkingFee
                state.msg = 'success'

                //console.log(payload)
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