//Array.forEach()版
let answer = document.querySelector("#answer");

fruitNames.forEach(function (fruit) {
  answer.innerHTML += `<li>${fruit}</li>`;
});
answer1.innerHTML = `<ul>${answer1.innerHTML}</ul>`;
