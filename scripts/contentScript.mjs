/**
  executes in page contents (inject into browser tabs)
  read and modify DOM of web pages the browser visits
        add new elements and listeners

  communicate with parent extension by sending messages and storing
    values in storage API
 */

//display extension image on page
// <extensionDir>/images/sample.jpeg;

//
//
//

// let input = document.querySelector("input");
// input.style.color = "red";
// document.querySelector("input").style.color = "red";
// document.querySelectorAll("textarea").style.color = "red";

console.log(1);

//
// const source = document.getElementById("source");
// const result = document.getElementById("result");

// const inputHandler = function (e) {
//   result.innerHTML = e.target.value;
// };

// source.addEventListener("input", inputHandler);
//

let display = document.querySelector("input");

// set style per element vs by its content
// capture all text input, ability to inject content after them
// copy the entirety of, or sections of, innerHTML and paste
let inputHandler = (e) => {
  //change characters to blue font
  if (e.data !== null) {
    let char = e.data;
    return char.fontcolor("blue");
  }
};

display.addEventListener("input", inputHandler);
