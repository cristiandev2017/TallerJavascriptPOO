module.exports = class Electrodomestico {
    consumo;
    procedencia;
    constructor(consumo, procedencia) {
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.precio = 0;
    }

    verificarNacionalidad = () => {
        this.precio += this.procedencia === "nacional" ? 250000 : (this.procedencia === "internacional" ? 350000 : "No es una procedencia basica");
    }

    sumarAdicional(adicionalP) {
        this.precio = this.precio + adicionalP;
    }

    prueba() {
        return 100;
    }

    precioPorConsumo() {
        switch (this.consumo) {
            case "A":
                this.precio += 450000;
                break;
            case "B":
                this.precio += 350000;
                break;
            case "C":
                this.precio += 250000;
                break;
            default:
                console.log("Consumo no definido");
        }
    }

    calcularPrecio() {
        this.verificarNacionalidad();
        this.precioPorConsumo();
    }
}

//const elec = new Electrodomestico('A', 'nacional');
//console.log(elec.verificarNacionalidad());