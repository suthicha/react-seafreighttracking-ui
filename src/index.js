import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
<MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
</MuiThemeProvider>
,document.getElementById('root'));