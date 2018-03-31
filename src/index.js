import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducer'
import saga from './saga'

import './index.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
)

sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
