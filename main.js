const Electrodomestico = require("./Electrodomestico");
const Televisor = require("./Televisor");
const Nevera = require("./Nevera");

//Variables para instancias
let electrodomestico_pd = ['¿Cual es el tipo consumo?: ', '¿Cual es la procedencia?:'];
let electrodomestico_pr = [];
let nevera_pd = ['¿Cual es el tipo consumo?: ', '¿Cual es la procedencia?: ', '¿Ingrese el volumen?: '];
let nevera_pr = [];
let television_pd = ['¿Cual es el tipo consumo?: ', '¿Cual es la procedencia?: ', '¿Cual es su tamaño?: ', '¿Tiene sintonizador?: '];
let television_pr = [];

//Arreglos para inventario
let arregloElectros = [];
let arregloNeveras = [];
let arreglotvs = [];

let sw = 'terminar';
if (sw == "terminar") {
    console.log("Buenas tardes por favor ingrese, 1.Electro | 2. Nevera | 3. TV");
    process.stdin.on('data', function(data) {
        if (data == 1) {
            console.log("Ingreso Electro")
        } else if (data == 2) {
            console.log("Entraste a Nevera")
        } else {
            console.log("Entraste a Televisor")
        }
        /*
        process.stdin.on('data', function(data2) {
            console.log("Ingrese terminar para salir");
            if (data2 == 'fin') {
                sw = 'fin'
                console.log("entre aca");
            }
        });
        */
    });
}



function instanciaElectrodomestico() {
    function electrodomesticopd(i) {
        process.stdout.write(electrodomestico_pd[i]);
    }

    process.stdin.on('data', function(data) {
        electrodomestico_pr.push(data.toString().trim());

        if (electrodomestico_pr.length < electrodomestico_pd.length) {
            electrodomesticopd(electrodomestico_pr.length)
        } else {
            //console.log(electrodomestico_pr);
            let elect = new Electrodomestico(electrodomestico_pr[0], electrodomestico_pr[1]);
            console.log(elect);
            process.exit();
        }

    });
    electrodomesticopd(0);
}

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

function instanciaTelevisor() {
    function televisorpd(i) {
        process.stdout.write(television_pd[i]);
    }

    process.stdin.on('data', function(data) {
        television_pr.push(data.toString().trim());

        if (television_pr.length < television_pd.length) {
            televisorpd(television_pr.length)
        } else {
            //console.log(television_pr);
            let tev = new Televisor(television_pr[0], television_pr[1], parseInt(television_pr[2]), television_pr[3]);
            let tev2 = new Televisor('B', 'internacional', parseInt(television_pr[2]), television_pr[3]);
            arreglotv.push(tev);
            arreglotv.push(tev2);
            console.log(arreglotvs);
            process.exit();
        }

    });
    televisorpd(0);
}

// <----Llamado de instancias y pruebas--->
//instanciaNevera();
//instanciaTelevisor();
//instanciaElectrodomestico();