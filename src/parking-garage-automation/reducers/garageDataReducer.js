import { createSlice } from "@reduxjs/toolkit";
import { garageDataManagementThunk } from "../../services/garageDataManagementThunk";

const initialState = {
  loading: false,
  history: [],
};

const garageDataManagementSlice = createSlice({
  name: "garageData",
  initialState,
  reducers: {
    //...
  },
  extraReducers: (builder) => {
    builder
      .addCase(garageDataManagementThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(garageDataManagementThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
        console.log("fulfilled");
      })
      .addCase(garageDataManagementThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});


export default garageDataManagementSlice.reducer;
