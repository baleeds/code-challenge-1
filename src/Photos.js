import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Photo from './Photo';

const GET_PICTURES = gql`
  {
    pictures {
      id
      name
      size
      url
    }
  }
`;

const Photos = () => (
  <Query query={GET_PICTURES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return data.pictures.map(pic => (
        <Photo 
          url={pic.url}
          name={pic.name}
          key={pic.id}
        />
      ));
    }}
  </Query>
);

export default Photos;