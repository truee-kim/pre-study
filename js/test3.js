let ip = document.getElementById("input");
let text = document.getElementById("text");

// ip.addEventListener("click", function(){
//     alert("안녕");
// });

//ip에 입력한 값을 text에 추가할 수 있게
ip.addEventListener("keydown", function(){
    text.innerText = ip.value;
});

let person = {
    name: "jisung park",
    age: 21,
    team: "nct dream"
}

let info = document.getElementById("info");
let p = "";
for(let i in person){
    // console.log("숫자" + i);
     p += person[i] + "<br>";
}
// console.log(p);
info.innerHTML = p;


/*
function foo (a) {
    return a + 3;
  }
  
  const arr = [ foo(1), foo(2), foo(3) ];
  
  console.log(arr); // [4,5,6]??? 땡 ...  Array(3)*/