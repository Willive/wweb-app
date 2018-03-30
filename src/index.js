import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/App';
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
    <AppComponent />
  </MuiThemeProvider>
)
sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
