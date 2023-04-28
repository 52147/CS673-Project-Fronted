import {createSlice} from "@reduxjs/toolkit";
import {parkingRegisterThunk} from "../../services/registerThunk";

const initialState = {
    loading: false,
    msg: ''

}

const parkRegisterSlice = createSlice({
    name: 'parkRegister',
    initialState,
    reducers: {
        // ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(parkingRegisterThunk.pending, (state) => {
                state.loading = true
                // console.log("pending")
            })
            .addCase(parkingRegisterThunk.fulfilled, (state, { payload }) => {
                state.loading = false
                state.msg = 'success'
                console.log("success")
                console.log(payload)
            })
            .addCase(parkingRegisterThunk.rejected, (state, { payload }) => {
                state.loading = false
                state.msg = 'reject'
                console.log("reject" )
                console.log(payload)
            })
    }
});

export default parkRegisterSlice.reducer