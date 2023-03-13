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
    name: 'checkInCars',
    initialState,
    extraReducers: {
        [checkInCarThunk.pending]:
            (state) => {
                state.loading = true
                console.log("pending")
            },
        [checkInCarThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.responseMsg = payload.msg
                console.log("**")
                console.log(state.responseMsg)
            },
        [checkInCarThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default checkInCarSlice.reducer