console.log("node로 실행");

function getToken(){
    const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")

    console.log(result)

    return result;
}

getToken();