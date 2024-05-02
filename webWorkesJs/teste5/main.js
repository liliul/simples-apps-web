const canvasA = document.getElementById("main");
const canvasB = document.getElementById("worker");

const ctxA = canvasA.getContext("2d");
const canvasWidth = ctxA.width;
const canvasHeight = ctxA.height;

// Create a counter for Canvas A
let counter = 0;
setInterval(() => {
  redrawCanvasA();
  counter++;
}, 100);

// Redraw Canvas A counter
function redrawCanvasA() {
  ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
  ctxA.font = "24px Verdana";
  ctxA.textAlign = "center";
  ctxA.fillText(counter, canvasA.width / 2, canvasA.height / 2);
}

// This function creates heavy (blocking) work on a thread
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Call our Fibonacci function on the main thread
function slowMainThread() {
  fibonacci(42);
}

// Set up a worker thread to render Canvas B
const worker = new Worker("worker.js");

// Use the OffscreenCanvas API and send to the worker thread
const canvasWorker = canvasB.transferControlToOffscreen();
worker.postMessage({ canvas: canvasWorker }, [canvasWorker]);

// A 'slowDown' message we can catch in the worker to start heavy work
function slowdownWorker() {
  worker.postMessage("slowDown");
}