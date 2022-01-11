let color = "red";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Background color set to %cred", `color: ${color}`);
});
