import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './reset.css';
import './index.css';
import { client } from './apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="background">
          <div className="card">
            <h1>Pictures</h1>
            <div className="pictures-container">
              {/* Start here */}
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
