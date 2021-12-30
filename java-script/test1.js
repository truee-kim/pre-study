

let name = "ken";

// 역순으로 한 글자씩 출력하는 반복문을 작성해보세요.
let length = name.length - 1;
for(let i = length; i >= 0; i-- ){
    // console.log(i);
    console.log(name[i]);
}


var longText = "0i1a2m3k4e5n";

// 홀수번째 글자만 출력하는 코드를 작성해보세요.
// 홀수 2로 나눴을때 나머지 1이 남으면

for(let j = 0; j < longText.length; j++) {
    if(j == 0 || j % 2 === 0) {
        console.log(longText[j]);
    }
}