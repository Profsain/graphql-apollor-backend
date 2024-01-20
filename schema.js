// description: schema for the database and the queries and mutations that can be performed on it


export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
    }

    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
    }

    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
    }

    type Query {
        reviews: [Review],  # return all reviews entry point
        review(id: ID!): Review, # return a single review by id
        
        games: [Game],    # return all games
        game(id: ID!): Game, # return a single game by id

        authors: [Author], # return all authors
        author(id: ID!): Author, # return a single author by id
    }
`