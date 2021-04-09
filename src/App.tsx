import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import DefaultTest from "./component/defaultTest/defaultTest";
import DefaultTest2 from "./component/defaultTest2/defaultTest2";

const App = (): JSX.Element => {
    return(
        <div className="App">
            <Switch>
                <Route exact path='/testValue'><DefaultTest2/></Route>
                <Route exact path='/:test?'><DefaultTest/></Route>
                <Route path='/'><Redirect to='/' /></Route>
            </Switch>
        </div>
    )
}

export default App;

