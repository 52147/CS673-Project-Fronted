import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import ParkingGarageAutomation from "./parking-garage-automation";
import {configureStore} from "@reduxjs/toolkit";
import inputCarReducer from "./parking-garage-automation/reducers/inputCarReducer";
import {Provider} from "react-redux";
import parkInfoReducer from "./parking-garage-automation/reducers/parkInfoReducer";
import parkHistoryReducer from "./parking-garage-automation/reducers/parkHistoryReducer";
const store = configureStore({reducer: {checkInCars: inputCarReducer,parkInfo: parkInfoReducer,parkHistory:parkHistoryReducer}})

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
