let Electrodomestico = require("./Electrodomestico");

class Nevera extends Electrodomestico{
    constructor(consumo, procedencia, volumen){
        super(consumo, procedencia);
        this.volumen = volumen;
    }
    calcularPrecio(){
        super.calcularPrecio();
        this.sobrecostoVolumen();
    }
    sobrecostoVolumen(){
        let sobreVolumen = this.volumen - 120 ;
        if (sobreVolumen > 0){
            let incremento = sobreVolumen/10;
            let adicional = incremento * 0.05;
            super.sumarAdicional(this.precio*adicional);
        }
    }
}
let nev = new Nevera('C','internacional',130)
//nev.calcularPrecio();
//console.log(nev.precio);

nev.sobrecostoVolumen();
console.log(nev.sobrecostoVolumen);