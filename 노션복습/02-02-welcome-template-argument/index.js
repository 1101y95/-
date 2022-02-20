const apple = 3;
const banana = 10;

console.log("철수는 사과를"+apple+"개, 바나나를"+banana+"개 가지고 있습니다")
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다`) //템플릿 리터럴




    const name = "철수"
    const age = 13
    const school = "다람쥐 초등학교"
    const createAt = "2022-02-14"


function getWelcomeTemplate(name,age,school,createAt){

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

const result = getWelcomeTemplate(name,age,school,createAt)
console.log(result);