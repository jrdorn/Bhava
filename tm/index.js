let net;

let app = async () => {
  console.log("Loading MobileNet . . .");

  //
  net = await mobilenet.load();
  console.log("Loaded model");

  //
  const imgEl = document.querySelector("#img");
  const result = await net.classify(imgEl);
  console.log(result);
};

app();
