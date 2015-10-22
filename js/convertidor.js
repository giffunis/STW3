self.onmessage = function(temperatura) {
  console.log('Recibido la temperatura ' + temperatura.data[0] + temperatura.data[1]);
  console.log("Calculando la conversión");
  self.postMessage(temperatura.data[0]);
}
