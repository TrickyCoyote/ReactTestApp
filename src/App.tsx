import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {DefaultTest} from "./component/defaultTest";
import {DefaultTest2} from "./component/defaultTest2";

export const App = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    <Switch>
        <Route exact path='/'><DefaultTest/></Route>
        <Route exact path='/testValue'><DefaultTest2/></Route>
        <Route path='/'><Redirect to='/' /></Route>
    </Switch>
    </div>
  );


