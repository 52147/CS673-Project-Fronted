import {createSlice} from "@reduxjs/toolkit";
import {getAllMembershipThunk, getMembershipByPlateThunk, getMembershipThunk} from "../../services/membershipThunk";

const initialState = {
    loading: false,
    historyAll: []
}


const parkMembershipSlice = createSlice({
    name: 'parkMembership',
    initialState,
    extraReducers: {
        [getMembershipThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getMembershipThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.historyAll = payload
                //console.log(payload);
            },
        [getMembershipThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            },

        [getAllMembershipThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getAllMembershipThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.historyAll = payload
                //console.log(payload);
            },
        [getAllMembershipThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            },

        [getMembershipByPlateThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getMembershipByPlateThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.historyAll = payload
                //console.log(payload);
            },
        [getMembershipByPlateThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            },


    },

    reducers: {
        //...
    }

});

export default  parkMembershipSlice.reducer