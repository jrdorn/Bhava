/**
 * 
 native browser interaction
 hard logic
 listener to trigger popup when user clicks icon
 */

//|| Popup

let color = "purple";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`Background color set to %c${color}`, `color: ${color}`);
});

//
//
//

//|| Content Script

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content-script.js"],
  });
});
