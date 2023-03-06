import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from "./component/views/LandingPage/LandingPage";
import RegisterPage from "./component/views/RegisterPage/RegisterPage";
import LoginPage from "./component/views/LoginPage/LoginPage";

function App() {
  return (
      <Router>
        <div>
            <Routes>
                <Route exact path="/" componet = {<LandingPage/>}/>
                <Route exact path="/login" element = {<LoginPage/>}/>
                <Route exact path="/register" element = {<RegisterPage/>}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
