let base_de_datos = [

    {
        Clientes: {
            pregunta1: "¿Digite el nombre del cliente quedesea conocer su data?",
            nombres: {
                nombre1: "Pedro",
                nombre2: "Miguel"
            }
        },
        pregunta2: {
            pregunta2: "¿Desea saber cual es su estado actual?",
            estados: {
                estado1: "Activo",
                estado2: "Desactivado"
            }
        }, 
        preguntas3: {
            pregunta3: "¿Proximas fechas de pago?",
            fechas: {
                fecha1: "5 de Julio",
                fecha2: "2 de Agosto"
            }
        }, 

    }


];



let tipo_objeto = typeof base_de_datos[0].Clientes;
if(tipo_objeto == "object"){
    
    let propiedad = prompt("Digita lel nombre del cliente");
    console.log (base_de_datos[0].Clientes);
    navegadorDeNodo(base_de_datos[0].Clientes, propiedad);
} 

function navegadorDeNodo(objecto, propiedad){
    console.log(objecto[propiedad]);
}


console.log(tipo_objeto);




//Ejercicio 1
var numbers = [6,3,1,8,2,3,6,6,2,5,3];

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }

    return maxEl;
}

console.log(mode(numbers));


// ejercicio 2
let arr = [8,"e",7,2,"a","d","f",2,3,1,4,3];

let stringOnly = (val) => {
    if (typeof(val) === "string"){
        return val;
    }
}

let result = arr.filter(stringOnly);
console.log(result);


// ejercicio 3

var num = [1,4,7,2,4,1,9,4,0,2,4,5,12];
console.log(Math.max.apply(null,num));


//ejercicio 4

var arr = [1,4,5,-1,-7,2,3,9];

var min = (Math.min.apply(null, arr));

console.log(min);