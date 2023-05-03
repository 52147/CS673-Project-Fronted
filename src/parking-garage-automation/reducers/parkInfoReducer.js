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
    reducers: {
      // ...
    },
    extraReducers: (builder) => {
      builder
        // .addCase(getParkingInfoThunk.pending, (state) => {
        //     state.loading = true;
        // })
        .addCase(getParkingInfoThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.PlateNumber = action.payload.content.parkinfo.plate;
          if (action.payload.content.parkinfo.entrance != null) {
            state.EnterTime = action.payload.content.parkinfo.entrance.substring(0, 19);
          }
          if (action.payload.content.exit != null) {
            state.DepartureTime = action.payload.content.exit.substring(0, 19);
          }
          state.TotalParkingTime = action.payload.content.parking_time;
          state.ParkingFee = action.payload.content.parkingFee;
          state.msg = action.payload.msg;
          console.log(action.payload);
        })
        .addCase(getParkingInfoThunk.rejected, (state,action) => {
          state.loading = false;
          state.msg = 'fail'
          console.log('reject');
        });
    },
});

export default parkInfoSlice.reducer