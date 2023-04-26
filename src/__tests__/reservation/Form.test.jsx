import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import FormComponent from "../../parking-garage-automation/reservation/index.jsx";
import { MemoryRouter } from "react-router-dom";
import { FormThunk } from "../../services/formThunk";

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
const store = configureStore({
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
describe("FormComponent", () => {
  test("renders Reservation Form heading", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormComponent />
        </MemoryRouter>
      </Provider>
    );

    const headingElement = screen.getByText(/Reservation Form/i);
    expect(headingElement).toBeInTheDocument();
  });
});
it('should show an error message on failed get form data', async () => {
  const res = await store.dispatch(FormThunk());
  console.log("res3", res)
  expect(res.type).toBe('/parklot/rejected');
});
