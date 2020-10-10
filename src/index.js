import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import apolloClient from './apolloClient'
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

