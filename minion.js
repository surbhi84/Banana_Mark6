var translateBtn = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var surl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return surl + "?" + "text=" + text;
}

translateBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var inputText = textInput.value;

  fetch(constructUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      textOutput.innerText = translatedTxt;
    });
  // .catch(errorHandler());
}

function errorHandler() {
  console.log("an error occured");
  alert("the server is unavailable try later!");
}
