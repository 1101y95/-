let date = new Date();

let yyyy = date.getFullYear();
let mm = date.getMonth()+1; // 1월이 0부터 세짐
let dd = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일, ${hour}시 ${min}분 ${sec}초 입니다`);