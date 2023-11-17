// worker.js

// This is the code that runs in the web worker

self.onmessage = function(event) {
    // This function is called when the web worker receives a message from the main thread
  
    // Perform some simple task
    var result = "Worker received: " + event.data;
  
    // Send the result back to the main thread
    self.postMessage(result);
  };
  