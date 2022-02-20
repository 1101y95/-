import { ApolloServer } from "apollo-server"
import { gql } from "apollo-server-express"

const myResolver = {
    Query: {
        fetchBoards: ()=>{
            //데이터를 조회하는 로직

            return "조회에 성공하였습니다"
        }
    },

    Mutation: {
        createBoard: ()=>{
            //데이터를 등록하는 로직
            return "등록에 성공하였습니다"
        }
    }
}

const myTypeDef = gql`
    type Query{
        fetchBoards: String
    }

    type Mutation{
        createBoard: String
    }

`

const server = new ApolloServer({
    typeDefs: myTypeDef,
    resolvers: myResolver
})

server.listen(3000);