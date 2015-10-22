var entrada = document.querySelector('#entrada');


if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("temperatura.js");

	entrada.onchange = function() {
	  myWorker.postMessage([entrada.value]); //sending message as array to the worker
	  console.log('Message posted to worker');
	};


}
