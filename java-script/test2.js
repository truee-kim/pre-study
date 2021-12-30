// 1. FizzBuzz
// 자바스크립트의 반복문과 조건문 등 여러분이 배운 지식을 이용하여 아래와 같은 조건을 만족하는 코드를 작성해보세요.
// 1부터 100까지 console.log를 실행합니다.
// 3의 배수는 "fizz"라는 문자열을 로그합니다.
// 5의 배수는 "buzz"라는 문자열을 로그합니다.
// 3과 5의 공배수는 "fizzbuzz"라는 문자열을 로그합니다.
// 나머지 숫자들은 해당 숫자 자체를 로그합니다.


/*
for (let i = 1; i <= 100; i++){
    if( i % (3 * 5) == 0){
        console.log("fizzbuzz");
    } else if(i % 5 == 0) {
        console.log("buzz");
    } else if( i % 3 == 0 ){
        console.log("fizz");
    } else {
        console.log(i);
    }
}*/

/*2. Biggest Number
아래와 같이 세 개의 변수가 숫자를 담고 있습니다. 가장 큰 수가 무엇인지 연산을 하여 console.log 하도록 코드를 작성해보세요.
Math.max를  사용하지 마세요.
a, b, c에 담긴 값이 바뀌더라도 항상 정확한 결과가 나올 수 있도록 코드를 작성해보세요*/
var a = 10;
var b = 20;
var c = 30;

let max = a;
if (max < b) {
    max = b
} if (max < c) {
    max = c
}

console.log(max);

/*여러분에게 아래와 같이 두 개의 문자열 값이 주어집니다. 하나의 문자열은 단어 정보를 담고 있고, 다른 하나의 문자열은 문장을 담고 있습니다.
word를 sentence 에서 찾고, 해당 word 의 시작 인덱스와 끝 인덱스를 출력하는 코드를 작성해 보세요. 
예를 들어, "Where did Jane get the dolphin from, John?" 이라는 문장에서 "dolphin" 이라는 단어는 23번째 인덱스에서 시작하여 29번째 인덱스에서 끝납니다. 따라서 23과 29를 출력합니다.*/
var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

let sentenceOf = sentence.indexOf("dolphin") // dolphin 시작점
// let num = word.indexOf('n');
console.log("num은 "+ num);

var indexOfD = sentenceOf; // SOMETHING 부분에 dolphin의 d의 위치를 찾는 코드를 작성해보세요.
var indexOfN = sentenceOf + num; // SOMETHING_ELSE 부분에 dolphin의 n의 위치를 찾는 코드를 작성해보세요.

console.log(indexOfD, indexOfN);