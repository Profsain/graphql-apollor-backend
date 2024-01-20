import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
// data schema
import { typeDefs } from './schema.js'
// resolver functions
import { resolvers } from './resolverFunction.js'

const port = 4000

// server setup
const server = new ApolloServer({
    // typeDefs, definitions of the GraphQL schema (types, queries, mutations)
    typeDefs,

    // resolvers, functions that are called to handle each query operation
    resolvers,
});

// start the server and listen on port 4000
const { url } = await startStandaloneServer(server, {
    listen: { port: port },
});

// log message
console.log(`🚀 Server ready at ${url}`);