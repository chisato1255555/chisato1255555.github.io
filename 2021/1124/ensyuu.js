//while版
let answer = document.querySelector("#answer");
let i = 0;
while(i < fruitNames.length){
  answer.innerHTML += `<li>${fruitNames[i]}</li>`;
  console.log(fruitNames[i]);
  i++;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;


//for版
let answer1 = document.querySelector("#answer1");
for(let i = 0;i < fruitNames.length;i++){
  answer1.innerHTML += `<li>${fruitNames[i]}</li>`;
  console.log(fruitNames[i]);
}
answer1.innerHTML = `<ul>${answer1.innerHTML}</ul>`;


