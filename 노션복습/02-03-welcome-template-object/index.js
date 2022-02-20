const user = {
    name : "철수",
    age : 13,
    school : "다람쥐 초등학교",
    createAt : "2022-02-14"
}


function getWelcomeTemplate(theUser){

    return `
    <html>
        <body>
            <h1>${theUser.name}님의 가입을 환영합니다</h1>
            <hr/>
            <span>이름 : ${theUser.name}</span>
            <span>나이 : ${theUser.age}</span>
            <span>학교 : ${theUser.school}</span>
            <span>가입일 : ${theUser.createAt}</span>
        </body>
    </html>
    `
}

const result = getWelcomeTemplate(user)
console.log(result);