const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const authMiddleware = require("./middlewares/authMiddleware");
const path = require('path');
const db = require('./config/connection');
const configVars = require('./config/vars');


const port = configVars.port;
const app = express();

const startApolloServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${port}${apolloServer.graphqlPath}`);
}

startApolloServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(port, () => {
    console.log(`API server running on port ${port}!`);
  });
});