function checkYear() {
  let num = document.querySelector(`#year`);
  let answer = document.querySelector(`#answer`);
  if (Number(num.value) % 4 === 0) {
    answer.innerHTML = "閏年";
  if (Number(num.value) % 100 === 0) {
    answer.innerHTML = "平年";
  if (Number(num.value) % 400 === 0) {
    answer.innerHTML = "閏年";
  }
  }
  }else{
    answer.innerHTML = "平年";
  }
}