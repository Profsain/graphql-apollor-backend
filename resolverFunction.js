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
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        },
    },
    Mutation: {
        addGame: (_, args) => {
            const game = {
                ...args.game,
                id: db.games.length + 1
            }
            db.games.push(game)
            return game
        },
        deleteGame: (_, args) => {
            const game = db.games.find((game) => game.id === args.id)
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games
        },
        updateGame: (_, args) => {
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    return {
                        ...game,
                        ...args.edit
                    }
                }
                return game
            })
            return db.games.find((game) => game.id === args.id)
        }
    }

}
// parent: the object that contains the result returned from the resolver on the parent type
// args: an object that contains the arguments passed to the field
// context: an object shared by all resolvers in a GraphQL operation. We use the context to contain per-request state such as authentication information and access our data sources.