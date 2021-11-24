function doFizzBuzz(){
  // iが1～100までのループ
  let i = 1;
  let answer = document.querySelector("#answer");
  while(i <= 100){
    let message = "";
    if(i % 3 === 0 && i % 5 === 0){
      message = "FizzBuzz";
    }else if(i % 3 === 0){
      message = "Fizz";
    }else if(i % 5 === 0){
      message = "Buzz";
    }else{
      message = i;
    }
    answer.innerHTML = `${answer.innerHTML} <br>${message}`;
    i++;
  }
}