function  doCheckAnswer() {
  let answer = document.querySelector("#answer");
  let input = document.querySelector("#input_string");
  let answerList = document.querySelectorAll("ul.answer-list");
  let answerArray = Array.from(answerList);

    answerArray.forEach(function(answer) {
      if (answer.innerHTML === input.value) {
        answer.innerHTML = "正解";
      }
      else {
        answer.innerHTML = "不正解";
      }
    })
}