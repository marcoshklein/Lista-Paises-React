import React from 'react';
import { Query } from 'react-apollo';
import Paises from './components/Paises.js'
import { GET_PAISES } from './queries';
import './App.css';


const App = () => (

    <Query query={GET_PAISES}>
      {({ loading, data }) => {
        if (loading) return null;

        return <Paises dados={data.Country} />

      }}
    </Query>
);

export default App;