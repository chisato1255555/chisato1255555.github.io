function  doFizzBuzz() {
  let answer = document.querySelector(`#answer`);
  let i = 1;
  while (i <= 100) {
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      answer.innerHTML = "FizzBuzz<br>";
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      answer.innerHTML = "Fizz<br>";
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      answer.innerHTML = "Buzz<br>";
      console.log("Buzz");
    }
    else {
      answer.innerHTML = "i<br>";
    }
    i++;
  }
}
