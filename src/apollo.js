import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "localhost:4005/graphql",
});