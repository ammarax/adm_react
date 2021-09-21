import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';

const Main = props => (
    <Switch>
        <Route path='/' component={App} />  {/*User will LogIn*/}
    </Switch>
);

export default Main;