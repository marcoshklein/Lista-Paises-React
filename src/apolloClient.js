import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache =  new InMemoryCache({
  addTypename: false
});

const apolloClient = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache
});

export default apolloClient;