//서울에서 김서방 찾기
var answer = '';
function solution(seoul) {
    for(let i = 1; i <= 1000; i++) {
        if(seoul[i] === "Kim") {
            answer = i;
        }
    }
    return "김서방은 " + answer  + "에 있다.";
}

seoul = ["Jane", "Kim"];



//가운데 글자 가져오기
//홀수면 1개 짝수면 2개

let sMiddle = document.getElementById("sMiddle");
let s = 'abcdefgh';
var answer = '';
function solution(s) {
    if(s.length % 2 == 0) {
        answer = s.charAt(s.length / 2) + s.charAt (s.length / 2 + 1);
    } else {
        answer = s.charAt(s.length / 2);
    }
    return sMiddle.innerHTML = answer;
}
solution(s);


//수박수박수박수박