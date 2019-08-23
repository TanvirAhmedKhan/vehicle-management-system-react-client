import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homePage';
import Error from './components/error';
import List from './components/list';
import AddVehicle from './components/addVehicle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/list" component={List} />
          <Route path="/add" component={AddVehicle} />
          <Route component={Error}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
