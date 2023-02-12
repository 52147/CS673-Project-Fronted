import './App.css';
import { InputCar } from './pages/InputCar';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import ParkingGarageAutomation from "./parking-garage-automation";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/*" element={<ParkingGarageAutomation/>}/>
            <Route path='/' exact element={<InputCar />} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
