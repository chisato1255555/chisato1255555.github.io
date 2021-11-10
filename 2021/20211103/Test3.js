function appendCircle(){
  let modal = document
      .getElementById(`modal`);
  modal.insertAdjacentHTML(`beforeend`, `〇`);
}


function appendCross(){
  let modal = document
      .getElementById(`modal`);
  modal.insertAdjacentHTML(`beforeend`, `✕`);
}



function appendCircle(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = `${modal.innerHTML}○`;
}
function appendCross(){
  let modal = document.querySelector("#modal");
  modal.innerHTML = `${modal.innerHTML}×`;
}
