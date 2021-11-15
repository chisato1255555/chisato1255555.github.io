function checkAge(){
  let num = document.querySelector(`#age`);
  let answer = document.querySelector(`#answer`);
  if(Number(0 < (num.value) && (num.value) < 20)){
    window.alert("未成年" + answer.innerHTML);
  }else if(Number(20 <= (num.value) && (num.value) < 65)){
    window.alert("成人" + answer.innerHTML);
  }else if (Number(num.value) >= 65){
    answer.innerHTML = "高齢者";
  }else if(Number(num.value) <= 0){
    answer.innerHTML = "エラー";
  }
}