/**
 * 
 app displayed when extension is active
 */

//
let changeColor = document.querySelector("#changeColor");
// console.log(changeColor);

// setPageBackgroundColor when button is clicked
changeColor.addEventListener("click", async () => {
  console.log("gm");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

//
let setPageBackgroundColor = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
};
