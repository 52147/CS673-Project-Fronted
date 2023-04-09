import {createSlice} from "@reduxjs/toolkit";
import {getAllMembershipThunk, getMembershipThunk} from "../../services/membershipThunk";

const initialState = {
    loading: false,
    historyAll: []
}

const parkMembershipSlice = createSlice({
    name: 'parkMembership',
    initialState,
    reducers: {
      // ...
    },
    extraReducers: (builder) => {
      builder
        .addCase(getMembershipThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(getMembershipThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.historyAll = payload;
        })
        .addCase(getMembershipThunk.rejected, (state) => {
          state.loading = false;
        })
        .addCase(getAllMembershipThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllMembershipThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.historyAll = payload;
        })
        .addCase(getAllMembershipThunk.rejected, (state) => {
          state.loading = false;
        });
    },
});

export default  parkMembershipSlice.reducer