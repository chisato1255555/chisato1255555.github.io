function  doCheckAnswer() {
  let answer = document.querySelector("#answer");
  let input = document.querySelector("#input_string");
  let answerList = document.querySelectorAll("ul.answer-list li");
  let answerArray = Array.from(answerList);

    answerArray.forEach(function(answer1) {
      if (answer1.innerHTML === input.value) {
        answer.innerHTML = "正解";
      }
      else {
        answer1.innerHTML = "不正解";
      }
    })
}