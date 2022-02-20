const user = {
    name : "철수",
    age : 13,
    school : "다람쥐 초등학교",
    createAt : "2022-02-14"
}

function getWelcomeTemplate({name,age,school,createAt}){

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


const result = getWelcomeTemplate(user)
console.log(result);