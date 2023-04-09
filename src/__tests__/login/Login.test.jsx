import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LoginComponent from "../../parking-garage-automation/login/index.jsx";

import { configureStore } from "@reduxjs/toolkit";
import inputCarReducer from "../../parking-garage-automation/reducers/inputCarReducer";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer";
import loginReducer from '../../parking-garage-automation/reducers/loginReducer';
import parkHistoryReducer from "../../parking-garage-automation/reducers/parkHistoryReducer";
import checkOutCarReducer from "../../parking-garage-automation/reducers/checkOutCarReducer";
import authorityReducer from "../../parking-garage-automation/reducers/authorityReducer";
import feeManagementReducer from "../../parking-garage-automation/reducers/feeManagementReducer";
import registerReducer from "../../parking-garage-automation/reducers/registerReducer";
import garageDataReducer from "../../parking-garage-automation/reducers/garageDataReducer";
import FormReducer from '../../parking-garage-automation/reducers/FormReducer';
import forgetPasswordReducer from "../../parking-garage-automation/reducers/forgetPasswordReducer";
import membershipReducer from "../../parking-garage-automation/reducers/membershipReducer";

const store = configureStore({
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

describe("Login", () => {
  it("renders the login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Forgot Password")).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });
});

