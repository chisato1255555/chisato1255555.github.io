function checkUserInput(){
  if(Number(document.querySelector(`#user_input`).value) == "隣の客はよく柿食う客だ"){
    window.alert("〇");
  }else{
    window.alert("×");
  }
}