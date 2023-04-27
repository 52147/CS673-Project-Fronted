// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import LoginComponent from "../../parking-garage-automation/login/index.jsx";

// import { configureStore } from "@reduxjs/toolkit";
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



// describe("Login", () => {
//   it("renders the login page", () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <LoginComponent />
//         </MemoryRouter>
//       </Provider>
//     );

//     expect(screen.getByText("Forgot Password")).toBeInTheDocument();

//     const submitButton = screen.getByRole('button', { name: 'Submit' });
//     expect(submitButton).toBeInTheDocument();
//   });
// });
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { loginThunk } from '../../services/loginThunk';
import LoginComponent from '../../parking-garage-automation/login';
import { MemoryRouter } from "react-router-dom";

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




  it('should show an error message on failed login', async () => {
    const userData = { username: 'wrong', password: 'wrong' };
    const res = await store.dispatch(loginThunk(userData, store));
    console.log("res2", res)
    expect(res.type).toBe("/login/rejected");
  });
});


import axios from 'axios';

jest.mock('axios');
describe('loginThunk', () => {
  it('should return success value on successful login', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const mockData = { data: { token: 'token123' } };
    console.log('re23123456');
    axios.post.mockResolvedValue(mockData);
    const re = await store.dispatch(loginThunk(userData));
    console.log('re', re);
    const success = res.payload.token;
    console.log('success', success);
    expect(success).toBe('token123');
  });
});




