/**
 * 
 native browser interaction
 hard logic
 listener to trigger popup when user clicks icon
 */

let color = "purple";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`Background color set to %c${color}`, `color: ${color}`);
});
