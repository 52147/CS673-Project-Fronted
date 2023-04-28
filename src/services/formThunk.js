import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./formServices";
// import {safeFormService} from "./formServices";

export const updateFormThunk = createAsyncThunk("/parklot/save", async () => {
  const json = await service.updateFormService();
  return json;
});

export const recordFormThunk = createAsyncThunk(
  "/parklot/appointment",
  async () => {
    const json = await service.recordFormService();
    return json;
  }
);

export const FormThunk = createAsyncThunk("/parklot", async () => {
  const json = await service.FormService();
  return json;
});

export const clientrecordFormThunk = createAsyncThunk(
  "/parklot/showUser",
  async (setValue) => {
    console.log(setValue);
    const json = await service.clientrecordFormService(setValue);
    return json;
  }
);

export const appointmentFormThunk = createAsyncThunk(
  "/parklot/appointment/showAll",
  async (setValue) => {
    console.log(setValue);
    const json = await service.appointmentFormService(setValue);
    return json;
  }
);

export const resetFormThunk = createAsyncThunk(
  "/parklot/reset",
  async (setValue) => {
    console.log(setValue);
    const json = await service.resetFormService(setValue);
    return json;
  }
);


export const safeFormThunk = createAsyncThunk(
  "/parklot/save",
  async (data) => {
      console.log(data);
      const json = await service.safeFormService(data);
      return json;
  }
);