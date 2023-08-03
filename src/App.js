import React, { Components } from "react";
import Header from "./Components/Header";
import footer from "./Components/footer";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import login from "./Components/login";
import ViewOutput from "./Components/ViewOutput";
import ReportCase from "./Components/ReportCase";
import UpdateProgress from "./Components/UpdateProgress";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
      <Header/>
        <Routes>
          <Route path="/" exact element={<ReportCase/>}></Route>
          <Route path="/list" element={<ReportCase/>}></Route>
          <Route path="/login" element={<login/>}></Route>
          <Route path="/ViewOutput" element={<ViewOutput/>}></Route>
          <Route path="/UpdateProgress/:id" element={<UpdateProgress/>}></Route>
                  </Routes>
                  <footer/>
              </div>
                  </div>
    
  );
}
export default App;
