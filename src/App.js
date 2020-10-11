import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/index';
import store from './store';
// import Paises from './components/Paises.js'

const App = () => (

  <Provider store={store}>
    <Routes />
  </Provider>

);

export default App;