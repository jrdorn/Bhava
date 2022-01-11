const webcamEl = document.querySelector("#webcam");
const classifier = knnClassifier.create();

let net;

let app = async () => {
  console.log("Loading MobileNet . . .");

  //
  net = await mobilenet.load();
  console.log("Loaded model");

  //
  const webcam = await tf.data.webcam(webcamEl);

  //
  const addExample = async (classId) => {
    //
    const img = await webcam.capture();

    //
    const activation = net.infer(img, true);

    //
    classifier.addExample(activation, classId);

    //
    img.dispose();
  };

  //
  document
    .querySelector("#class-a")
    .addEventListener("click", () => addExample(0));
  document
    .querySelector("#class-b")
    .addEventListener("click", () => addExample(1));
  document
    .querySelector("#class-c")
    .addEventListener("click", () => addExample(2));

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture();

      //
      const activation = net.infer(img, "conv_preds");
      //
      const result = await net.classify(img);

      const classes = ["A", "B", "C"];
      document.querySelector("#console").innerText = `
        prediction: ${classes[result.label]}\n
        probability: ${result.confidences[result.label]}
      `;
    }

    //
    img.dispose();

    //
    await tf.nextFrame();
  }
};

app();
