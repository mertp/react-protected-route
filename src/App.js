import "./App.css";
import "./components/Login"
import LoginForm from "./components/Login";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Welcome from "./components/Welcome";
import PrivateRoutes from "./components/PrivateRoute"
import LoginForm from "./components/Login";

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={App}></Route>
          <Route  path="/login" element={LoginForm}></Route>
          <Route exact path='/welcome' 
            element={
              <Protected isLoggedIn={isloggedIn} >
                <Welcome />
              </Protected>
            }
          />
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}
export default App;
