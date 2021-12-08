function doFetch() {
  fetch("https://api.openbd.jp/v1/get?isbn=9784591159224").then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        console.log(json);
        let html = "<table>";
        json.values.forEach((row) => {
          html += `<tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                  <td>${row[2]}</td>
                </tr>`;
        });
        html += "</table>";
        document.querySelector("#answer").innerHTML = html;
      }
  );
}