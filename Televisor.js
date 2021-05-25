let Electrodomestico = require("./Electrodomestico");



class Televisor extends Electrodomestico {

    constructor(consumo, procedencia, tamanio, sintoniza) {
        super(consumo, procedencia);
        this.tamanio = tamanio;
        this.sintoniza = sintoniza;
    }
    calcularPrecioPulgadas() {
        let adicional = this.tamanio <= 40 ? 0 : 0.3;
        super.sumarAdicional(this.precio * adicional);

    }

    calcularPrecioSintoniza() {
        if (this.sintoniza == "si") {
            super.sumarAdicional(250000)
        }
    }

    calcularPrecio() {
        super.calcularPrecio();
        this.calcularPrecioPulgadas();
        this.calcularPrecioSintoniza();
    }
}


//require([Electrodomestico])
//let elec = new Electrodomestico('A', 'Nacional');
//console.log(elec.prueba());

let tv = new Televisor('A', 'nacional', 100, "no");
tv.calcularPrecioPulgadas();
tv.calcularPrecio();
console.log(tv.precio);
console.log(tv.consumo, tv.procedencia);
console.log(tv);