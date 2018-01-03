import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './routes/app'
import Home from './routes/home'
// import App from './components/app';
// import { isLoggedIn, isLogged } from './authentication';
// import * as Pages from './components/views';

export default ( 
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
  </Route>
);