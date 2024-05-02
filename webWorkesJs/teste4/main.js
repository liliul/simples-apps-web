const form = document.querySelector("form");
const input = document.querySelector('input[type="number"]');
const result = document.querySelector("p#result");
const worker = new Worker("worker.js");

worker.onmessage = function (event) {
  result.textContent = event.data;
  console.log("Got: " + event.data + "\n");
};

worker.onerror = function (error) {
  console.log(`Worker error: ${error.message} \n`);
  throw error;
};

form.onsubmit = function (event) {
  event.preventDefault();
  worker.postMessage(input.value);
  input.value = "";
};
