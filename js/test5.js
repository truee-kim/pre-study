//연결 확인
// alert("나는test5");

//up & down
//id myNum yourNum myCheck yourCheck result

let mycheck = document.getElementById("myCheck");
let mynum = document.getElementById("myNum");
let num1 = 0; 
mycheck.addEventListener("click", () => {
    // alert(mynum.value); 
    num1 = mynum.value * 1;
    mynum.value = "맞춰보세요";
})

let ucheck = document.getElementById("yourCheck");
let unum = document.getElementById("yourNum");
let num2 = 0;
let result = document.getElementById("result");
ucheck.addEventListener("click", () => {
    num2 = unum.value * 1;
    result.innerHTML = "";
    if (num1 > num2){
        // alert("up")
        result.innerHTML += "UP";
    } else if(num1 < num2) {
        // alert("down")
        result.innerHTML += "DOWN";
    } else {
        result.innerHTML += "CORRECT";
    }
})