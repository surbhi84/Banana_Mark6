var translateBtn = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

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
