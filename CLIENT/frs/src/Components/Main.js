import React, { Component } from 'react';
 import { Router, Route } from 'react-router-dom';
 
 // Our all component files
 import ViewOutput from '../Components/ViewOutput';
 import ReportCase from './ReportCase';
 import UpdateProgress from '../Components/UpdateProgress';
 
 class Main extends Component {
 
 render() {
 return (
 <Router>
 <routes>
 <Route exact path='/' component={ViewOutput} />
 <Route path='/list' component={ViewOutput} /> 
 <Route path='/ReportCase' component={ReportCase} />
 <Route path='/UpdateProgress/:id' component={UpdateProgress} />
 </routes>
 </Router>
 );
 }
 }

 export default Main;