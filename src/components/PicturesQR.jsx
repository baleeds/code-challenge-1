import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Pictures from './Pictures';

const query = gql`
query PicturesQuery {
  pictures {
    id
    name
    url
    size
  }
}
`;

const PicturesQR = () => (
  <Query
    query={query}
  >
    {({ data, loading, error }) => {
      if (error) { console.error(error); return "error"; };
      if (loading) return 'loading';
      return <Pictures pictures={data.pictures} />
    }}
  </Query>
);

export default PicturesQR;
