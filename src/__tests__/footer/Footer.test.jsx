import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import FooterComponent from "../../parking-garage-automation/footer/index.jsx";

import { configureStore } from "@reduxjs/toolkit";
import inputCarReducer from "../../parking-garage-automation/reducers/inputCarReducer.js";
import parkInfoReducer from "../../parking-garage-automation/reducers/parkInfoReducer.js";
import loginReducer from '../../parking-garage-automation/reducers/loginReducer.js';
import parkHistoryReducer from "../../parking-garage-automation/reducers/parkHistoryReducer.js";
import checkOutCarReducer from "../../parking-garage-automation/reducers/checkOutCarReducer.js";
import authorityReducer from "../../parking-garage-automation/reducers/authorityReducer.js";
import feeManagementReducer from "../../parking-garage-automation/reducers/feeManagementReducer.js";
import registerReducer from "../../parking-garage-automation/reducers/registerReducer.js";
import garageDataReducer from "../../parking-garage-automation/reducers/garageDataReducer.js";
import FormReducer from '../../parking-garage-automation/reducers/FormReducer.js';
import forgetPasswordReducer from "../../parking-garage-automation/reducers/forgetPasswordReducer.js";
import membershipReducer from "../../parking-garage-automation/reducers/membershipReducer.js";

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

describe("Footer component", () => {
  it("renders the footer component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FooterComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("support@gmail.com")).toBeInTheDocument();
  });
});
