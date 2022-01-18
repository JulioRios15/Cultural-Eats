import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectToDb } from './utils/connection.js';
import config from 'config';
import dotenv from 'dotenv';
dotenv.config();


const port = config.get("port") || 3001;
const app = express();

const server = new ApolloServer();
server.applyMiddleware({app});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, async () => {
    await connectToDb();
    console.log(`server running on: http://localhost:${port}`)
    console.log(`use graphql at: http://localhost:${port}${server.graphqlPath}`);
})