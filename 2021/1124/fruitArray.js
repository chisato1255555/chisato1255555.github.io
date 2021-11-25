//Array.forEach()版
let answer = document.querySelector("#answer");

fruitNames.forEach(function (fruit) {
  answer.innerHTML += `<li>${fruit}</li>`;
});
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
