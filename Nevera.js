let Electrodomestico = require("./Electrodomestico");

module.exports = class Nevera extends Electrodomestico {
    constructor(consumo, procedencia, volumen) {
        super(consumo, procedencia);
        this.volumen = volumen;
    }
    calcularPrecio() {
        super.calcularPrecio();
        this.sobrecostoVolumen();
    }
    sobrecostoVolumen() {
        let sobreVolumen = this.volumen - 120;
        if (sobreVolumen > 0) {
            let incremento = sobreVolumen / 10;
            let adicional = incremento * 0.05;
            super.sumarAdicional(this.precio * adicional);
        }
    }
}