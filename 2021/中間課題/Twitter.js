let answer = document.querySelector("#name");


for(let i = 0;i <tweets.length;i++){
  answer.innerHTML = `<li>
    <img src=" ${tweets[i].avatar}" width="100" height="100" alt="..." 
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;


function all(){
  for(let i = 0;i <tweets.length;i++) {
      answer.innerHTML = `<li>
    <img src=" ${tweets[i].avatar}" width="100" height="100" alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
  }
  answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function sanbot() {
  for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].name === `三郎BOT`) {
        answer.innerHTML = `<li>
    <img src=" ${tweets[i].avatar}" width="100" height="100" alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
      }
    }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function jirou() {
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === `次郎`) {
      answer.innerHTML = `<li>
    <img src=" ${tweets[i].avatar}" width="100" height="100" alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
    }
  }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function tarou() {
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === `太郎`) {
      answer.innerHTML = `<li>
    <img src=" ${tweets[i].avatar}" width="100" height="100" alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
    }
  }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}