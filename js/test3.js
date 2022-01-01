let ip = document.getElementById("input");
let text = document.getElementById("text");

// ip.addEventListener("click", function(){
//     alert("안녕");
// });

//ip에 입력한 값을 text에 추가할 수 있게
ip.addEventListener("keydown", function(){
    text.innerText = ip.value;
})

let person = {
    name: "jisung park",
    age: 21,
    team: "nct dream"
};

let info = document.getElementById("info");
let p = "";
for(let i in person){
    // console.log("숫자" + i);
     p += person[i] + "<br>";
}
console.log(p);
info.innerHTML = p;