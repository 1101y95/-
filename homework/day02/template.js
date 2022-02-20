const yy ={
    myname: "yoon",
    myemail: "yoon@abc.com",
    myresidentNumber: "961101-2001234",
    myfavSite: "www.naver.com"
}

export function getWelcomeTemplate(name, email, number, site){
    return `
	    <html>
	        <body>
	            <h1>${name}님 가입을 환영합니다.</h1>
	            <hr />
	            <span>이름: ${name}</span>
	            <span>이메일: ${email}살</span>
	            <span>주민번호: ${number}</span>
	            <span>좋아하는 사이트: ${site}</span>
	        </body>
	    </html>
	`
}

let {myname, myemail, myresidentNumber, myfavSite} = yy;

console.log(getWelcomeTemplate(myname, myemail, myresidentNumber, myfavSite));