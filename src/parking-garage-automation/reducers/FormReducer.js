import { createSlice } from "@reduxjs/toolkit";
import {
  updateFormThunk,
  recordFormThunk,
  FormThunk,
  clientrecordFormThunk,
  appointmentFormThunk
} from "../../services/formThunk";
const initialState = {
  loading: false,
  history: [],
  mess: "123",
  
};
const authoritySlice = createSlice({
  name: "updateForm",
  initialState,
  extraReducers: {
    [updateFormThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateFormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [updateFormThunk.rejected]: (state) => {
      state.loading = false;
    },
    [recordFormThunk.pending]: (state) => {
      state.loading = true;
    },
    [recordFormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [recordFormThunk.rejected]: (state) => {
      state.loading = false;
    },
    [FormThunk.pending]: (state) => {
      state.loading = true;
    },
    [FormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [FormThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [clientrecordFormThunk.pending]: (state) => {
      state.loading = true;
    },
    [clientrecordFormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [clientrecordFormThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [appointmentFormThunk.pending]: (state) => {
      state.loading = true;
    },
    [appointmentFormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [appointmentFormThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
  },

  reducers: {
    //...
  },
});

export default authoritySlice.reducer;
