function checkAge(){
  let num = document.querySelector(`#age`);
  let answer = document.querySelector(`#answer`);
  if(Number(0 < (num.value) && (num.value) < 20)){
    answer.innerHTML = "未成年";
  }else if(Number(20 <= (num.value) && (num.value) < 65)){
    answer.innerHTML = "成人";
  }else if (Number(num.value) >= 65){
    answer.innerHTML = "高齢者";
  }else if(Number(num.value) <= 0){
    answer.innerHTML = "エラー";
  }
}