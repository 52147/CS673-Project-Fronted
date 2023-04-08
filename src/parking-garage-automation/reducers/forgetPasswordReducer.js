import {createSlice} from "@reduxjs/toolkit";
import {forgetPasswordThunk} from "../../services/forgetPasswordThunk";

const initialState = {
    loading: false,
    msg: '',
    user:{
        username:'username',
        q1:'1',
        a1:'11',
        q2:'2',
        a2:'22',
    },


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
                state.user = payload.user
                //console.log("success")
                //console.log(payload)
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