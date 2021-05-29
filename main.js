const Electrodomestico = require("./Electrodomestico");
const Televisor = require("./Televisor");
const Nevera = require("./Nevera");


/* Prueba Electrodomestico
const elec = new Electrodomestico('A', 'Nacional');
console.log(elec.prueba());
*/

//Prueba televisor
/*
let tv = new Televisor('A', 'nacional', 100, "no");
tv.calcularPrecioPulgadas();
tv.calcularPrecio();
console.log(tv.precio);
console.log(tv.consumo, tv.procedencia);
console.log(tv);
*/

//Prueba de ingreso y guardar datos
//Escribir (\n->salto de linea)
//process.stdout.write("Hola mundo");
//Obtener datos del usuario


let nevera_pd = ['¿Cual es el tipo consumo?: ', '¿Cual es la procedencia?: ', '¿Ingrese el volumen?: '];
let nevera_pr = [];

function instanciaNevera() {
    function neverapd(i) {
        process.stdout.write(nevera_pd[i]);
    }

    process.stdin.on('data', function(data) {
        nevera_pr.push(data.toString().trim());

        if (nevera_pr.length < nevera_pd.length) {
            neverapd(nevera_pr.length)
        } else {
            console.log(nevera_pr);
            let nev = new Nevera(nevera_pr[0], nevera_pr[1], parseInt(nevera_pr[2]));
            nev.calcularPrecio();
            console.log(nev.precio);
            process.exit();
        }

    });
    neverapd(0);
}

let television_pd = ['¿Cual es el tipo consumo?: ', '¿Cual es la procedencia?: ', '¿Cual es su tamaño?: ', '¿Tiene sintonizador?: '];
let television_pr = [];

function instanciaTelevisor() {
    function televisorpd(i) {
        process.stdout.write(television_pd[i]);
    }

    process.stdin.on('data', function(data) {
        television_pr.push(data.toString().trim());

        if (television_pr.length < television_pd.length) {
            televisorpd(television_pr.length)
        } else {
            console.log(television_pr);
            let tev = new Televisor(television_pr[0], television_pr[1], parseInt(television_pr[2]),television_pr[3]);
            tev.calcularPrecio();
            console.log(tev.precio);
            process.exit();
        }

    });
    televisorpd(0);
}

//instanciaNevera();
instanciaTelevisor();
