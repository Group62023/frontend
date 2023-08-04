import React, { Components, useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import ViewOutput from "./Components/ViewOutput";
import ReportCase from "./Components/ReportCase";
import UpdateProgress from "./Components/UpdateProgress";
import "./App.css";
import axios from "axios";

function App() {
  const [isloggedin, setIsloggedin] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    setIsloggedin(true);
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    let configoptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.get('http://localhost:3001/login', { username, password },configoptions);
    setIsloggedin(response.data);    
      window.location = "/ReportCase";
    } catch (err) {
      
      //console.error(err.response.data.message);
    }
  };
  if (isloggedin) {
    return (
      <div>
        <div className="container">
          <Header />
          
          <Routes>
            <Route path="/" exact element={<ReportCase />}></Route>
            <Route path="/list" element={<ReportCase />}></Route>
            <Route path="/login" element={<login />}></Route>
            <Route path="/ViewOutput" element={<ViewOutput />}></Route>
            <Route
              path="/UpdateProgress/:id"
              element={<UpdateProgress />}
            ></Route>
          </Routes>
          <Footer/>
        </div>
        
      </div>
    );
  } else {
    return (
      <div>
          <br/>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={1234}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
     
    </div>
    
    );
  }
}
export default App;
