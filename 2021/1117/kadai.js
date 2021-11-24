function doCheckAnswer(){
  let input = document.querySelector("#input_string");
  let answer = document.querySelector("#answer");
  let answerNodeList = document.querySelectorAll(
      "ul.answer-list li"
  );
  let answers = Array.from(answerNodeList);
  let correct = false;
  answers.forEach(function(liElement){
    if(input.value === liElement.innerHTML){
      correct = true;
    }
    console.log(
        `input_string: ${input.value}, li: ${liElement.innerHTML}`
    )
  });
  if(correct){
    answer.innerHTML = "正解";
  }else{
    answer.innerHTML = "不正解";
  }
}
