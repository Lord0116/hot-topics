// References to HTML
let content = document.querySelector(".content");
let buttons = document.querySelectorAll("header nav a");
let url = "content/partial-1.html";

function handelAjax(urlValue) {
  fetch(urlValue)
    .then(function (response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(function (dataString) {
      content.innerHTML = dataString;
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

for (let button of buttons) {
  button.addEventListener("click", handleClick);
}

function handleClick(event) {
  event.preventDefault();
  url = event.target.href;

  handelAjax(url);
}
handelAjax(url);
