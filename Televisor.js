let Electrodomestico = require("./Electrodomestico");



module.exports = class Televisor extends Electrodomestico {

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