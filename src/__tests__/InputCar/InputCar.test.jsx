import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import InputCarComponent from "../../parking-garage-automation/InputCar/index.jsx";
import { checkInCarThunk } from "../../services/inputCarThunk";

import { configureStore } from "@reduxjs/toolkit";
import inputCarReducer from "../../parking-garage-automation/reducers/inputCarReducer";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer";
import loginReducer from "../../parking-garage-automation/reducers/loginReducer";
import parkHistoryReducer from "../../parking-garage-automation/reducers/parkHistoryReducer";
import checkOutCarReducer from "../../parking-garage-automation/reducers/checkOutCarReducer";
import authorityReducer from "../../parking-garage-automation/reducers/authorityReducer";
import feeManagementReducer from "../../parking-garage-automation/reducers/feeManagementReducer";
import registerReducer from "../../parking-garage-automation/reducers/registerReducer";
import garageDataReducer from "../../parking-garage-automation/reducers/garageDataReducer";
import FormReducer from "../../parking-garage-automation/reducers/FormReducer";
import forgetPasswordReducer from "../../parking-garage-automation/reducers/forgetPasswordReducer";
import membershipReducer from "../../parking-garage-automation/reducers/membershipReducer";
const store = {
  reducer: {
    checkInCars: inputCarReducer,
    parkInfo: parkInfoReducer,
    parkHistory: parkHistoryReducer,
    users: loginReducer,
    checkOutCars: checkOutCarReducer,
    parkFee: feeManagementReducer,
    authoHistory: authorityReducer,
    parkRegister: registerReducer,
    garageData: garageDataReducer,
    updateForm: FormReducer,
    forgetPassword: forgetPasswordReducer,
    parkMembership: membershipReducer,
  },
};
const store3 = configureStore({
  reducer: {
    checkInCars: inputCarReducer,
    parkInfo: parkInfoReducer,
    parkHistory:parkHistoryReducer,
    users: loginReducer,
    checkOutCars:checkOutCarReducer,
    parkFee: feeManagementReducer,
    authoHistory: authorityReducer,
    parkRegister: registerReducer,
    garageData:garageDataReducer,
    updateForm: FormReducer,
    forgetPassword:forgetPasswordReducer,
    parkMembership:membershipReducer
  }
})
describe("InputCar", () => {
  it("renders the input page", async () => {
    const mockContent = { plate: "ABC123" };
    const mockCar = { Entrance: true };
    const mockResponseMsg = "Success";
    const initialState = {
      checkInCars: {
        loading: false,
        responseMsg: mockResponseMsg,
        car: mockCar,
      },
    };
    const testStore = configureStore({
      reducer: store.reducer,
      preloadedState: initialState,
    });

    // await testStore.dispatch(checkInCarThunk(mockContent));

    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <InputCarComponent showMessengerCustomerChat={false} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Bicycle User Press Here")).toBeInTheDocument();
  });
});
const store2 = configureStore({
  reducer: {
    checkInCars: inputCarReducer,
    parkInfo: parkInfoReducer,
    parkHistory: parkHistoryReducer,
    users: loginReducer,
    checkOutCars: checkOutCarReducer,
    parkFee: feeManagementReducer,
    authoHistory: authorityReducer,
    parkRegister: registerReducer,
    garageData: garageDataReducer,
    updateForm: FormReducer,
    forgetPassword: forgetPasswordReducer,
    parkMembership: membershipReducer,
  },
});
describe("InputCar", () => {
  it("renders the input page", async () => {
    render(
      <Provider store={store2}>
        <MemoryRouter>
          <InputCarComponent showMessengerCustomerChat={false} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Check-in")).toBeInTheDocument();
  });

  it("should show an error message on failed check in", async () => {
    const userData = { carType: "Bicycle", plate: "123456" };
    const res = await store3.dispatch(checkInCarThunk(userData, store));
    console.log("res2", res);
    expect(res.type).toBe('check/checkIn/rejected');
  });
});
