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