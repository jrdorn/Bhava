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

//get current tab

// let getTabId = async () => {
//   let queryOpts = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOpts);
//   return tab.id;
// };

// try {
//   getTabId().then((tabId) => {
//     //inject content script
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabId },
//         files: ["./contentScript.mjs"],
//       },
//       () => {
//         // console.log("done");
//         let e = chrome.runtime.lastError;
//         if (e !== undefined) {
//           console.log(tabId, _, e);
//         }
//         //
//       }
//     );
//   });
// } catch (error) {
//   console.log(error);
// }

//
//
//
// Called when the user clicks on the action.
chrome.action.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  console.log("Turning " + tab.url + " red!");
  chrome.scripting.executeScript({
    code: 'document.body.style.backgroundColor="red"',
  });
});

//
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["contentScript.mjs"],
//   });
// });

//
//
//
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
//
//
//

// //
// let changeColor = document.querySelector("#changeColor");

// // setPageBackgroundColor when button is clicked
// changeColor.addEventListener("click", async () => {
//   console.log("gm");
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// //
// let setPageBackgroundColor = () => {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// };

//

// import * as tf from "@tensorflow/tfjs";

// // Define a model for linear regression.
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// // Generate some synthetic data for training.
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// // Train the model using the data.
// model.fit(xs, ys, { epochs: 10 }).then(() => {
//   // Use the model to do inference on a data point the model hasn't seen before:
//   model.predict(tf.tensor2d([5], [1, 1])).print();
//   // Open the browser devtools to see the output
// });

//

//
//
//
// popup.html:1 Uncaught TypeError: Failed to resolve module
// specifier "@tensorflow/tfjs". Relative references must start with
//  either "/", "./", or "../".
