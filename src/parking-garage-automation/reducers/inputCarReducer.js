import {createSlice} from "@reduxjs/toolkit";
import {checkInCarThunk} from "../../services/inputCarThunk";

const initialState = {
    responseMsg: 'asdasd',
    loading: false,
    car: {
        plate:''
    },
    state:''
}

const checkInCarSlice = createSlice({
    name: "checkInCars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(checkInCarThunk.pending, (state) => {
          state.loading = true;
          console.log("pending");
        })
        .addCase(checkInCarThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.responseMsg = payload.msg;
          console.log("**");
          console.log(state.responseMsg);
        })
        .addCase(checkInCarThunk.rejected, (state) => {
          state.loading = false;
        });
    },
});

export default checkInCarSlice.reducer