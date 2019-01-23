import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './reset.css';
import './index.css';
import { client } from './apollo';
import PicturesQR from './components/PicturesQR';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <PicturesQR />
      </ApolloProvider>
    );
  }
}

export default App;
