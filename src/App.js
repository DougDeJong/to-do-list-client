import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import AddProject from './components/projects/AddProject';
import ProjectDetails from './components/projects/ProjectDetails';
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <Switch>
         <Route exact path="/projects" component={ProjectList}/>
         <Route exact path="/projects/:id" component={ProjectDetails} />
       </Switch>
     </div>
    );
  }
}

export default App;
