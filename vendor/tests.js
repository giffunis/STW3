var expect = chai.expect;

describe("Pruebas BDD", function() {
 var aux = document.getElementById("salida");


  describe("convertir()", function() {
    it("convertir(32F)", function() {
      window.onload = function() {
        entrada.value = "32F";
        convertir();
        expect(salida.innerHTML).to.equal("0.0C");
      };
    });

    it("convertir2(0C)", function() {
      window.onload = function() {
        entrada.value = "0C";
        convertir();
        expect(salida.innerHTML).to.equal("32.0F");
      }
    });
  });
});
