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
  reducers: {
    //...
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateFormThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFormThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(updateFormThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(recordFormThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(recordFormThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(recordFormThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(FormThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(FormThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(FormThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(clientrecordFormThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(clientrecordFormThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(clientrecordFormThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(appointmentFormThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(appointmentFormThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(appointmentFormThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      });
  },
});

export default authoritySlice.reducer;
