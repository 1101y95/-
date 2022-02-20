import { ApolloServer, gql } from "apollo-server";

const myResolver = {
    Query: {
        hello: () => "world"
    }
}

const myTypeDef = gql`
    type Query{
        "A simple type of getting start"
        hello: String
    }
`

const server = new ApolloServer({
    typeDefs: myTypeDef,
    resolvers: myResolver
})

server.listen(3000);