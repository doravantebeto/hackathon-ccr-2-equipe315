import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Chatbot from '../pages/Chatbot'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>

    <Switch>
      <Route path='/' exact component={Chatbot}/>
      <Route path='/home' component={Home}/>
    </Switch>
      
    </BrowserRouter>
  );
};

export default Routes;