import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import {DefaultTest} from "./component/defaultTest";
import {DefaultTest2} from "./component/defaultTest2";

export class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/'><DefaultTest/></Route>
                    <Route exact path='/testValue'><DefaultTest2/></Route>
                    <Route path='/'><Redirect to='/' /></Route>
                </Switch>
            </div>
        )
    };
}


