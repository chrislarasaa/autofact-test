import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Quiz from '../pages/Quiz';

function Routes() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path= "/" component ={Quiz}/>
    </Switch>
   </BrowserRouter>
  ) ;
}

export default Routes;
