// the code of the main thread of the Web Page

const w = new Worker("worker.js");

w.addEventListener("message", (e) => {
    console.log("Main <- Worker:", e.data);
 });

 w.postMessage("Hello Worker!");
 
setTimeout(() => w.postMessage("Hello World!"), 1000);
setTimeout(() => w.postMessage("stop"), 2000);
