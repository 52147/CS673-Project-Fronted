import { createSlice } from "@reduxjs/toolkit";
import { garageDataManagementThunk } from "../../services/garageDataManagementThunk";

const initialState = {
  loading: false,
  history: [],
};
const garageDataManagementSlice = createSlice({
  name: "garageData",
  initialState,
  extraReducers: {
    [garageDataManagementThunk.pending]: (state) => {
      state.loading = true;
    },
    [garageDataManagementThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
      console.log("fulfilled");
    },
    [garageDataManagementThunk.rejected]: (state) => {
      state.loading = false;
    },
  },

  reducers: {
    //...
  },
});

export default garageDataManagementSlice.reducer;
