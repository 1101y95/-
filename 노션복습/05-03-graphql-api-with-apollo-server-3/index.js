import { ApolloServer } from "apollo-server"
import { gql } from "apollo-server-express"

const myResolver = {
    Query: {
        fetchBoards: ()=>{
            //데이터를 조회하는 로직

            return [
                { number: 1, writer: "철수", title: "제목입니다~~~", contents: "내용이에요!!!" },
                { number: 2, writer: "영희", title: "좋은 날씨입니다!", contents: "내용@@@@@" },
                { number: 3, writer: "훈이", title: "점심 맛있게 드셨나요?!", contents: "식사 하셨나요?!" },
                { number: 4, writer: "맹구", title: "안녕하세요?!", contents: "내용이요!!!" }
            ]
        }
    },

    Mutation: {
        createBoard: (_,args)=>{
            //데이터를 등록하는 로직

            console.log(args)
            console.log(args.createBoardInput)

            return "등록에 성공하였습니다"
        }
    }
}

const myTypeDef = gql`

    input CreateBoardInput{
        writer: String
        title: String
        contents: String
    }

    type Mutation{
        createBoard(createBoardInput: CreateBoardInput): String
    }


    type MyBoard{
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query{
        fetchBoards: [MyBoard]
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