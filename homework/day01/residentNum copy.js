//주민번호 뒷자리를 가리는 함수
//주민번호 가운데에 -가 들어있는지 확인
//주민번호 앞자리 6, 뒷자리 7인지 확인
//뒷자리 중 6자리는 *로 표시됨
//함수는 퍼사드 패턴


    

    export function isResiNum(num){
        //주민번호 가운데에 -가 들어있는지 확인
        if(num.includes("-")===false){
            console.log("에러발생. 형식이 올바르지 않습니다");
            return false;
        }
        return num;
    }


    export function isResiNum2(num){
        //주민번호 앞자리 6, 뒷자리 7인지 확인
        if(num.split("-")[0].length !==6||num.split("-")[1].length!==7){
            console.log("에러발생. 갯수를 정확히 입력해주세요");
            return false;
        }
        return num;

    }

    export function masking(num){
        //뒷자리 중 6자리는 *로 표시됨
        let arr = Array.from(num);
        arr.fill("*",8);
        let result = arr.join("");

        return result;
    }