import Vue from "vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const client = new ApolloClient({
  uri: "http://128.199.197.171:4000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

export default apolloProvider;
