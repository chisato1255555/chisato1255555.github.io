function  doLoop(){
  let sum = 0;
  let i = 0;
  while(i <= 10000){
    sum = sum + i
    if(sum > 50000){
      break;
    }
    i++;
}
document.querySelector("#answer").innerHTML = sum;
}

