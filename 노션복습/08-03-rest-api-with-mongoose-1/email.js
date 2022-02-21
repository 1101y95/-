import axios from "axios"
import dotenv from "dotenv"

export function getWelcomeTemplate({name,age,school,createAt}){

    return `
    <html>
        <body>
            <h1>${name}님의 가입을 환영합니다</h1>
            <hr/>
            <span>이름 : ${name}</span>
            <span>나이 : ${age}</span>
            <span>학교 : ${school}</span>
            <span>가입일 : ${createAt}</span>
        </body>
    </html>
    `
}

export async function sendWelcomeTemplateToEmail(template, email){

    const appKey = process.env.appKeyEmail
    const XSecretKey = process.env.XSecretKeyEmail
    const sender = process.env.senderEmail

    try{
        await axios.post(
            `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
            {
                senderAddress: sender,
                title: "가입을 환영합니다",
                body: template,
                receiverList : [{receiveMailAddr: email, receiveType: "MRTO"}]
            },
            {
                headers: {
                    "X-Secret-Key": XSecretKey,
                    "Content-Type": "application/json;charset=UTF-8"
                }
            }
        )
    }catch(error){
        console.log(error)
    }

    //이메일로 템플릿을 전송
    console.log(`${email}로 ${template}을 전송합니다`);
    console.log(sender)
}