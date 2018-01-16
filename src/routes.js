import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './routes/app'
import Home from './routes/home'
import Login from './routes/login'
import Shipment from './routes/shipment'
// import { isLoggedIn, isLogged } from './authentication';

export default ( 
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login} />
    <Route path='home' component={Home} />
    <Route path='shipment' component={Shipment} />
  </Route>
);