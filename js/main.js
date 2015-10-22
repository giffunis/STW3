var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("temperatura.js");
        }
        w.onmessage = function(event) {
            document.getElementById("salida").innerHTML = event.data;
        };
    } else {
        document.getElementById("salida").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}
