import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Chatbot from '../pages/Chatbot'

const Routes = () => {
  return (
    <BrowserRouter>

    <Switch>
      <Route path='/' component={Chatbot}/>
    </Switch>
      
    </BrowserRouter>
  );
};

export default Routes;