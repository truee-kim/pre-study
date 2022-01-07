//추가 btn을 누르면 이미지 태그가 생성..
let add = document.getElementById("add");
let list = document.getElementById("list");

add.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "../img/octopus.jpg";
    img.width = 200;
    img.height = 200;

    list.appendChild(img);

})

//제거 이미지 제거
let del = document.getElementById("del");
del.addEventListener("click", () => {
    //끝에서부터 지워지게
    // list의 child 갯수 구하기
    // console.log(list.childElementCount); 필요없다

    //자식요소 찾기
    // let child = list.childNodes; 얘는 자식을 다 찾는다
    //마지막 자식만 필요하다.
    let child = list.lastChild;
    // console.log(child);
    list.removeChild(child);
})