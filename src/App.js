import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import ParkingGarageAutomation from "./parking-garage-automation";
import {configureStore} from "@reduxjs/toolkit";
import inputCarReducer from "./parking-garage-automation/reducers/inputCarReducer";
import {Provider} from "react-redux";
const store = configureStore({reducer: {checkInCars: inputCarReducer}})
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
