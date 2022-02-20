// import axios from "axios";


 const getValidationNumber = async () => {

  const phone2 = document.getElementById("PhoneNumber02").value;
  const phone3  = document.getElementById("PhoneNumber03").value;
  let myphone = "010"+phone2+phone3;
  console.log(myphone);
  
 await axios.post("http://localhost:3000/phone/token", { phone:myphone, isAuth: "false" });

     document.querySelector('#ValidationInputWrapper').style.display = 'flex'
     console.log('인증 번호 전송')
}
  

 

// 회원 가입 API 요청
const submitSignup = async () => {

  const email = document.getElementById("SignupEmail").value;
  const name = document.getElementById("SignupName").value;
  const number = document.getElementById("SignupPersonal").value;
  const site = document.getElementById("SignupPrefer").value;

  await axios.post(("http://localhost:3000/email"), {name,email,number,site});

  console.log('회원 가입 이메일 전송')
}

// export {getValidationNumber, submitSignup};