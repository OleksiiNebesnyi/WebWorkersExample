// Web Workers code

console.log("Worker started");

addEventListener("message", (e) => {
   if (e.data !== "stop") {

      console.log("Main -> Worker:", e.data);

      postMessage("data received");

   } else {
       
      close();
      
      console.log("Worker stopped");
   }
});
