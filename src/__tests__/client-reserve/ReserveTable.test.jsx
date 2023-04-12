import { configureStore } from "@reduxjs/toolkit";
import FormReducer from '../../parking-garage-automation/reducers/FormReducer.js';
import { clientrecordFormThunk } from "../../services/formThunk";

describe("clientrecordFormThunk", () => {
  it("should fetch user's parking records and update the store correctly", async () => {
    const initialState = {
      loading: false,
      history: [],
    };

    const store = configureStore({
      reducer: {
        updateForm: FormReducer,
      },
      preloadedState: initialState,
    });

    // Mock the backend API response
    const fakeResponse = [
      {
        id: 1,
        name: "John",
        date: "2022-05-01",
        license: "ABC123",
        parklot: "A1",
      }
    ];
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeResponse),
    });

    // Dispatch the thunk with a fake user ID
    await store.dispatch(clientrecordFormThunk("1")).unwrap();

    // Check that the store was updated correctly
    const updatedState = store.getState().updateForm;
    expect(updatedState.loading).toEqual(false);
    expect(updatedState.history).toEqual(fakeResponse);
  });
});
