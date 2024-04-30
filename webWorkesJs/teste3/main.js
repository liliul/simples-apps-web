const btnLargeOperation = document.getElementById("btn-large-operation");
const btnChangeColor = document.getElementById("btn-change-color");
const output = document.getElementById("output");

btnLargeOperation.addEventListener("click", () => {
  output.textContent = "Started Large Process...";
  //   const value = handleLargeOperation();
  //   console.log(value);
  const worker = new Worker("worker.js");
  const before = Date.now();
  worker.postMessage("operation");
  worker.onmessage = (event) => {
    const after = Date.now();
    console.log("Executed in: ", (after - before) / 1000, " s");
    console.log("Data processed Received: ", event.data);
    output.textContent = event.data;
  };
});

// This event will be blocked by LargeOperation without web worker
btnChangeColor.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (
    body.style.backgroundColor &&
    body.style.backgroundColor !== "rgb(255, 255, 255)"
  ) {
    body.style.backgroundColor = "#fff";
  } else {
    body.style.backgroundColor = "#000";
  }
});
