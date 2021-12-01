fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=`).then(
    function(response){
      return response.json();
    }
).then(
    function(json){
      let answerHtml = "";
      answerHtml = `${json.results[0].address1}
      ${json.results[0].address2}
      ${json.results[0].address3}`;
      document.querySelector("#answer").innerHTML = `${answerHtml}`;
    }
);