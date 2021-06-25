const w = new Worker("worker_err.js");
w.addEventListener("error", (e) => {
   console.log("File:", e.filename);
   console.log("Error in", e.lineno, "line");
   console.log("Message:", e.message);
});
w.postMessage("Hello Worker!");
