// resolver function for the graphql server
// handle queries and mutations

// db 
import db  from './_db.js';


export const resolvers = {
    Query: {
        reviews: () => db.reviews, // return all reviews entry point
        review: (_, args) => db.reviews.find(review => review.id === args.id), // return a single review by id

        games: () => db.games, // return all games
        game: (_, args) => db.games.find(game => game.id === args.id), // return a single game by id

        authors: () => db.authors, // return all authors
        author: (_, args) => db.authors.find(author => author.id === args.id), // return a single author by id
    }
}

// parent: the object that contains the result returned from the resolver on the parent type
// args: an object that contains the arguments passed to the field
// context: an object shared by all resolvers in a GraphQL operation. We use the context to contain per-request state such as authentication information and access our data sources.