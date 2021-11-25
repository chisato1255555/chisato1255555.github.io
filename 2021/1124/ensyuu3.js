//Array.forEach()版
let answer = document.querySelector("#answer");

tweets.forEach(function (tweetsA) {
  answer.innerHTML += `<li>
    <b>${tweetsA.name}</b>:
    ${tweetsA.message}
    <i>${tweetsA.tweetedAt}</i>
  </li>`;
});
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
