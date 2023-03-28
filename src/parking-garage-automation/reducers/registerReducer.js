import {createSlice} from "@reduxjs/toolkit";
import {parkingRegisterThunk} from "../../services/registerThunk";

const initialState = {
    loading: false,
    msg: ''

}

const parkRegisterSlice = createSlice({
    name: 'parkRegister',
    initialState,
    extraReducers: {
        [parkingRegisterThunk.pending]:
            (state) => {
                state.loading = true
                 //console.log("pending")
            },
        [parkingRegisterThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.msg = 'success'
                //console.log("success")
                //console.log(payload)
            },
        [parkingRegisterThunk.rejected]:
            (state) => {
                state.loading = false
                state.msg = 'reject'
                //console.log("reject" )
            }



    },

    reducers: {
        //...
    }

});

export default parkRegisterSlice.reducer