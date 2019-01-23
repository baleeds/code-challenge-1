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
        <div className="background">
          <div className="card">
            <PicturesQR />      
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
