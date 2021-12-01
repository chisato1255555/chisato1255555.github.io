let answer = document.querySelector("#answer");


for(let i = 0;i <tweets.length;i++){
  let answer = document.querySelector("#name");
  answer.innerHTML += `<li>
    <img src= ${tweets[i].avatar} alt="..." 
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
}
answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;


function all(){
  let answer = document.querySelector("#name");
  for(let i = 0;i <tweets.length;i++){
  answer.innerHTML += `<li>
    <img src= ${tweets[i].avatar} alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
  }
  answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function sanbot() {
  let answer = document.querySelector("#name");
  for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].name === `三郎BOT`) {
        answer.innerHTML += `<li>
    <img src= ${tweets[i].avatar} alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
      }
    }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function jirou() {
  let answer = document.querySelector("#name");
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === `次郎`) {
      answer.innerHTML += `<li>
    <img src= ${tweets[i].avatar} alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
    }
  }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}

function tarou() {
  let answer = document.querySelector("#name");
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name === `太郎`) {
      answer.innerHTML += `<li>
    <img src= ${tweets[i].avatar} alt="..."
    <b>${tweets[i].name}</b>:
    ${tweets[i].message}
    <i>${tweets[i].tweetedAt}</i>
  </li>`;
    }
  }
    answer.innerHTML = `<ul>${answer.innerHTML}</ul>`;
}