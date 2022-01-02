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
let sanswer = '';
function stringSolution(s) {
    if(s.length % 2 == 0) {
        sanswer = s.charAt(s.length / 2) + s.charAt (s.length / 2 + 1);
        console.log(sanswer);
    } else {
        sanswer = s.charAt(s.length / 2);
        console.log(sanswer);
    }
    return sanswer;
    console.log(sanswer);
}
sMiddle.innerHTML += stringSolution(s);


//수박수박수박수박  수 + 박 for 돌면서,,, n반큼 n이 3이면 수박수
let subak = document.getElementById("subak");
let su = '수';
let bak = '박';
let n = 4;

function solution(n) {
    for(let i = 1; i <= n; i ++){
        if(i % 2 == 0) {
            answer += bak;
        } else {
            answer += su;
        }
    }
    return answer;
}

subak.innerHTML += solution(n);