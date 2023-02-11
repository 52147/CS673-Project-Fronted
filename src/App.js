
import './App.css';
import { Login } from './pages/Login';
import { InputCar } from './pages/InputCar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route>
          {/* <InputCar/> */}
          <Route path='/' exact element={<InputCar />} /> 
          <Route path='/login' exact element={<Login />} />      
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
