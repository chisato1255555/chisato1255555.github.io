function checkNumber(){
  let num = document.querySelector(`#num`);
  if(Number(num.value) > 10){
    window.alert("true" + num.value);
  }else{
    window.alert("false" + num.value);
  }
}