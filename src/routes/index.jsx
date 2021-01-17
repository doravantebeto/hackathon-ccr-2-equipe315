import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Chatbot from '../pages/Chatbot';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Profile from '../pages/Profile';
import Planning from '../pages/Planning';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Chatbot} />
        <Route path='/home' component={Home} />
        <Route path='/loja' component={Store} />
        <Route path='/perfil' component={Profile} />
        <Route path='/planejamento' component={Planning} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
