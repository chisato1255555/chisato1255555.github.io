function checkYear() {
  let num = document.querySelector(`#year`);
  let answer = document.querySelector(`#answer`);
  if (Number(num.value) %4===0) {
    window.alert("閏年" + answer.innerHTML);
  }else if(Number(num.value) %100!==0) {
    window.alert("平年" + answer.innerHTML);
  }
}