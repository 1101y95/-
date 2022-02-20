//주민번호 뒷자리를 가리는 함수
//주민번호 가운데에 -가 들어있는지 확인
//주민번호 앞자리 6, 뒷자리 7인지 확인
//뒷자리 중 6자리는 *로 표시됨
//함수는 퍼사드 패턴
import{isResiNum,isResiNum2,masking} from "./residentNum copy.js";


function maskingResiNum(num){
    let a = isResiNum(num);
    let b = isResiNum2(a);
    let c = masking(b);
    return c;
}

console.log(maskingResiNum("961101-2003852"));