function chkForm(){
    //mFrom에 접근하기
    // let idEle = document.mForm.id 
    // let pwEle = document.mForm.pw 

    //변수에 담아 단축해보자
    let f = document.mForm;
    let idEle = f.id; 
    let pwEle = f.pw;


/*
    // alert("서브밋함수 호출됨")
    //name이 id인 입력창의 값이 없다면 submit을 중단(return false)
    let idEle = document.querySelector("input[name='id']");
    //password도 체크
    let pwEle = document.querySelector("input[name='pw']");
*/

    //값이 있는지 확인은 ? 
    // input에 value 속성을 확인해야한다
    console.log(idEle.value);
    /*
    if(idEle.value == ""){
        alert("아이디를 입력하세요");
        //입력을 하지 않았다면 아이디창으로 커서가 들어간다
        idEle.focus();
        return false; //페이지이동X
    }
    */
   /*
   if(pwEle.value == ""){
       alert("패스워드를 입력하세요");
       //아이디창이 활성화
       pwEle.focus();
       return false; //페이지이동X
    }
    */
   //비어있다면
   //isEmpty함수로 바꿔줬다.
   if(isEmpty(f.id, "아이디를 입력하세요")) return false;    
   if(isEmpty(f.pw, "패스워드를 입력하세요")) return false;    
   return true;

    
}


//중복이 되니 함수로 만들어보자
function isEmpty(ele, msg){
    if(ele.value == ""){
        alert(msg)
        ele.focus();
        return true; 
    }
    //호출한 쪽으로 결과값 넘기기
    return false;

}