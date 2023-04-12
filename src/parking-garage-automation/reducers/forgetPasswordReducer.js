import {createSlice} from "@reduxjs/toolkit";
import {forgetPasswordThunk} from "../../services/forgetPasswordThunk";

const initialState = {
    loading: false,
    msg: '',
    user:{},


}

const forgetPasswordSlice = createSlice({
    name: 'forgetPassword',
    initialState,
    extraReducers: {
        [forgetPasswordThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending")
            },
        [forgetPasswordThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.msg = 'success'
                state.user = payload
                //console.log("success")
                console.log(payload)
            },
        [forgetPasswordThunk.rejected]:
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

export default forgetPasswordSlice.reducer