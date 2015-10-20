var entrada = document.querySelector('#entrada');
var result = document.querySelector('.salida');

if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("temperatura.js");

	first.onchange = function() {
	  myWorker.postMessage([entrada.value]); //sending message as array to the worker
	  console.log('Message posted to worker');
	};


	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
