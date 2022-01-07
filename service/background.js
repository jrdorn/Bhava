let color = "turquoise";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Background color set to %cturquoise", `color: ${color}`);
});
