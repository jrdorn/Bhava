/**
 * 
 app displayed when extension is active
 */

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
