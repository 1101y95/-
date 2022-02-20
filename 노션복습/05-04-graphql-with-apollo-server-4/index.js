import { ApolloServer } from "apollo-server"
import { gql } from "apollo-server-express"
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

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
    },

    Mutation: {
        createTokenOfPhone:(_,args)=>{
            // 1. 휴대폰번호 자릿수 맞는지 확인하기
		      const isValidationPhone = checkValidationPhone(args.phone)
		      if(isValidationPhone === true){
		          // 2. 핸드폰 토큰 6자리 만들기
		          const token = getToken(6)
		
		          // 3. 핸드폰번호에 토큰 전송하기
		          sendTokenToSMS(args.phone, token)
                }
            return "인증번호를 전송했습니다"
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

        createTokenOfPhone(phone: String!): String
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