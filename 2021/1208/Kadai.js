function doFetch() {
  const code = document.getElementById('isbn').value;
  const parent = document.getElementById('bookinfo');
  parent.textContent = null;

  fetch('https://api.openbd.jp/v1/get?isbn=9784591159224' + code)
      .then(response =>  {
        return response.json();
      }).then( res => {
    const data = "書籍名:" + res.items[0].volumeInfo.title;
    parent.append(data);
  }).catch(function (error) {
    parent.append(error);
  });
}