import {createSlice} from "@reduxjs/toolkit";
import {checkOutCarThunk} from "../../services/checkOutCarThunk";

const initialState = {
    loading: false,
    checkOutMsg:''
}

const checkOutCarSlice = createSlice({
    name: 'checkOutCars',
    initialState,
    extraReducers: {
        [checkOutCarThunk.pending]:
            (state) => {
                state.loading = true
                console.log("pending")
            },
        [checkOutCarThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.checkOutMsg  = 'success'
                console.log(state.msg)
            },
        [checkOutCarThunk.rejected]:
            (state) => {
                state.loading = false
                state.checkOutMsg  = 'fail'
                console.log(state.msg)
            }


    },

    reducers: {
        //...
    }

});


export default checkOutCarSlice.reducer