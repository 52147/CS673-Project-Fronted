import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import ParkingGarageAutomation from "./parking-garage-automation";
import {configureStore} from "@reduxjs/toolkit";
import inputCarReducer from "./parking-garage-automation/reducers/inputCarReducer";
import {Provider} from "react-redux";
import parkInfoReducer from "./parking-garage-automation/reducers/parkInfoReducer";
import loginReducer from './parking-garage-automation/reducers/loginReducer';
import parkHistoryReducer from "./parking-garage-automation/reducers/parkHistoryReducer";
import checkOutCarReducer from "./parking-garage-automation/reducers/checkOutCarReducer";
import authorityReducer from "./parking-garage-automation/reducers/authorityReducer";
import feeManagementReducer from "./parking-garage-automation/reducers/feeManagementReducer";
import registerReducer from "./parking-garage-automation/reducers/registerReducer";
import garageDataReducer from "./parking-garage-automation/reducers/garageDataReducer";
import FormReducer from './parking-garage-automation/reducers/FormReducer';

const store = configureStore({reducer: {checkInCars: inputCarReducer,parkInfo: parkInfoReducer,
        parkHistory:parkHistoryReducer,users: loginReducer, checkOutCars:checkOutCarReducer,
        parkFee: feeManagementReducer,authoHistory: authorityReducer,parkRegister: registerReducer,
        garageData:garageDataReducer,updateForm: FormReducer}})

function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ParkingGarageAutomation />} />
        </Routes>
      </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
