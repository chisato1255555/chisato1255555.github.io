function  doFizzBuzz(){
  let answer = document.querySelector(`#answer`);
  let sum = 1;
  let i = 1;
  while(i <= 100){
    console.log(i);
    if (i % 3){
      answer.innerHTML = "Fizz<br>";
      console.log("Fizz");
    }
    else if (i % 5){
      answer.innerHTML = "Buzz<br>";
      console.log("Buzz");
    }
    else if (i % 3 && sum % 5){
      answer.innerHTML = "FizzBuzz<br>";
      console.log("FizzBuzz");
    }
    else{
      answer.innerHTML = "i<br>";
    }
    i++;
  }
}
