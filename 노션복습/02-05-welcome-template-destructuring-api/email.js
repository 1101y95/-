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

export function sendWelcomeTemplateToEmail(template, email){
    //이메일로 템플릿을 전송
    console.log(`${email}로 ${template}을 전송합니다`);
}