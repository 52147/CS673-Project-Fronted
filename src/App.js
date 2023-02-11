import './App.css';
import { InputCar } from './pages/InputCar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route>
          <Route path='/' exact element={<InputCar />} /> 
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
