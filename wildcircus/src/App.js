import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Performance from "./components/Performance";

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/wildcircus" component={Performance}/>
  
      
    </Switch>
     
    </div>
  );
}

export default App;
