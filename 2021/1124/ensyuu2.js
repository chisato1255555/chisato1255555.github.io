//for版
let answer = document.querySelector("#answer");
let i = 0;

for(let i = 0;i < tweets.length;i++){
  answer.innerHTML += `<li>
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
