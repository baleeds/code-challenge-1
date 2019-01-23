import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './reset.css';
import './index.css';
import { client } from './apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Good luck!</h1>
      </ApolloProvider>
    );
  }
}

export default App;
