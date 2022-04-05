// DESAFIO 1
let nombre = "Florencia";
let edad = 30;
let frase = `Hola! Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(frase)
// DESAFIO 2
let edad2 = 30;
let menor = 'Soy menor de edad';
let mayor = 'Soy mayor de edad';
let menor25 = 'y tengo menos de 25';
let mayor25 = 'y tengo 25 o más';
if (edad2 < 18) {
    console.log (menor);
} else {
    console.log (mayor);
    if (edad2 < 25) {
        console.log (menor25);
    } else {
        console.log (mayor25);
    }
}
// DESAFIO 3
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// TODOS LOS INDICES
for (let i = 0; i < numeros.length; i++) {
    console.log (numeros[i]);
}
// LOS PRIMEROS 5 INDICES
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log (numeros[i]);
}
// LOS ULTIMOS 5 INDICES
for (let i = 0; i < numeros.length; i++) {
    if (i <= 4) {
        continue;
    }
    console.log (numeros[i]);
}
// TODOS LOS INDICES MENOS EL 4
for (let i = 0; i < numeros.length; i++) {
    if (i === 4) {
        continue;
    }
    console.log (numeros[i]);
}
// DESAFIO 4
// FUNCION REGULAR
function suma (num1, num2) {
    return num1 + num2;
}
console.log (`El resultado de la suma es ${suma (6,12)}`)
// FUNCION FLECHA
const sumaFlecha = (num1, num2) => {
    return num1 + num2;
}
console.log (`El resultado de la suma es ${sumaFlecha (6,12)}`);
// FUNCION FLECHA UNICA LINEA DE CODIGO
const sumaFlechaUnicaLinea = (num1, num2) => num1 + num2;
console.log (`El resultado de la suma es ${sumaFlechaUnicaLinea (6,12)}`);