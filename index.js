import { ApolloServer } from '@apollo/server'
import { startStandaloneServer} from '@apollo/server/standalone'

const port = 4000;

// server setup
const server = new ApolloServer({
    // typeDefs, definitions of the GraphQL schema
    // resolvers, functions that are called for each query operation
});

// start the server and listen on port 4000
const { url } = await startStandaloneServer(server, {
    listen: { port: port },
    // cors: { origin: '*', credentials: true },
});

// log message
console.log(`🚀 Server ready at ${url}`);