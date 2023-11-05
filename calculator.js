//VARIABLES OPERATIVAS
let primerNumero = 0;
let segundoNumero = 0;
let operacion = ''; 
let nuevaOperacion = true; //indica iniciar una nueva operación y resetea el string en la caja de texto.

//NUMEROS
let numberOne = document.querySelector('.uno');
let numberTwo = document.querySelector('.dos');
let numberThree = document.querySelector('.tres');
let numberFour = document.querySelector('.cuatro');
let numberFive = document.querySelector('.cinco');
let numberSix = document.querySelector('.seis');
let numberSeven = document.querySelector('.siete');
let numberEight = document.querySelector('.ocho');
let numberNine = document.querySelector('.nueve');
let numberZero = document.querySelector('.cero');
let result = document.querySelector('.resultado');
let punto = document.querySelector('.punto');

//OPERACIONES
let opeSumar = document.querySelector('.suma');
let opeRestar = document.querySelector('.resta');
let opeDividir = document.querySelector('.division');
let opeMultiplicar = document.querySelector('.multiplicacion');
let opeIgual = document.querySelector('.igual');
let opeAC = document.querySelector('.ac');
let opeX2 = document.querySelector('.x2');
let opeRC2 = document.querySelector('.rc2');
let opePI = document.querySelector('.pi');


//EVENTOS AL HACER CLIC
numberOne.addEventListener('click', escribirUno);
numberTwo.addEventListener('click', escribirDos);
numberThree.addEventListener('click', escribirTres);
numberFour.addEventListener('click', escribirCuatro);
numberFive.addEventListener('click', escribirCinco);
numberSix.addEventListener('click', escribirSeis);
numberSeven.addEventListener('click', escribirSiete);
numberEight.addEventListener('click', escribirOcho);
numberNine.addEventListener('click', escribirNueve);
punto.addEventListener('click', escribirPunto);
numberZero.addEventListener('click', escribirCero);
opeSumar.addEventListener('click', escribirSuma);
opeRestar.addEventListener('click', escribirResta);
opeDividir.addEventListener('click', escribirDivision);
opeMultiplicar.addEventListener('click', escribirMultiplicacion);
opeIgual.addEventListener('click', escribirIgual);
opeAC.addEventListener('click', escribirResetear);



//FUNCIONES PARA ESCRIBIR LOS NUMEROS
function escribirUno() {
    if (nuevaOperacion === false)
        {result.value = result.value + 1;}
    else{
        result.value = '';
        result.value = result.value + 1;
        nuevaOperacion = false;}
};
function escribirDos() {
    if (nuevaOperacion === false)
        {result.value = result.value + 2;}
    else{
        result.value = '';
        result.value = result.value + 2;
        nuevaOperacion = false;}
};
function escribirTres() {
    if (nuevaOperacion === false)
        {result.value = result.value + 3;}
    else{
        result.value = '';
        result.value = result.value + 3;
        nuevaOperacion = false;}
};
function escribirCuatro() {
    if (nuevaOperacion === false)
        {result.value = result.value + 4;}
    else{
        result.value = '';
        result.value = result.value + 4;
        nuevaOperacion = false;}
};
function escribirCinco() {
    if (nuevaOperacion === false)
        {result.value = result.value + 5;}
    else{
        result.value = '';
        result.value = result.value + 5;
        nuevaOperacion = false;}
};
function escribirSeis() {
    if (nuevaOperacion === false)
        {result.value = result.value + 6;}
    else{
        result.value = '';
        result.value = result.value + 6;
        nuevaOperacion = false;}
};
function escribirSiete() {
    if (nuevaOperacion === false)
        {result.value = result.value + 7;}
    else{
        result.value = '';
        result.value = result.value + 7;
        nuevaOperacion = false;}
};
function escribirOcho() {
    if (nuevaOperacion === false)
        {result.value = result.value + 8;}
    else{
        result.value = '';
        result.value = result.value + 8;
        nuevaOperacion = false;}
};
function escribirNueve() {
    if (nuevaOperacion === false)
        {result.value = result.value + 9;}
    else{
        result.value = '';
        result.value = result.value + 9;
        nuevaOperacion = false;}
};
function escribirCero() {
    if (nuevaOperacion === false){
        {result.value = result.value + 0;}
    }
        
    else{
        result.value = '0';
};
}

function escribirPunto() {
    if (nuevaOperacion === false)
        {result.value = result.value + '.';}
    else{
        result.value = result.value + '.';
        nuevaOperacion = false;}
};

//funciones de operaciones
function escribirSuma() {
    primerNumero = result.value-0;
    operacion = '+';
    nuevaOperacion = true;
};

function escribirResta() {
    primerNumero = result.value-0;
    operacion = '-';
    nuevaOperacion = true;
};

function escribirDivision() {
    primerNumero = result.value-0;
    operacion = '÷';
    nuevaOperacion = true;
};

function escribirMultiplicacion() {
    primerNumero = result.value-0;
    operacion = '*';
    nuevaOperacion = true;
};
function escribirIgual() {
    segundoNumero = result.value-0;
    if (operacion === '+'){
        result.value = primerNumero + segundoNumero;
    };
    if (operacion === '-'){
        result.value =primerNumero - segundoNumero;
    };
    if (operacion === '÷'){
        result.value = primerNumero / segundoNumero;
    };
    if (operacion === '*'){
        result.value = primerNumero * segundoNumero;
    };
    nuevaOperacion = true;
};

function escribirResetear() {
    result.value = '0';
    nuevaOperacion = true;
};
opeX2.addEventListener('click', escribirCuadrado);
opeRC2.addEventListener('click', escribirRaiz);
opePI.addEventListener('click', escribirPI);

function escribirCuadrado() {
    result.value =  Math.pow(Number(result.value),2);
    nuevaOperacion = true;
};

function escribirRaiz() {
    result.value = Math.sqrt(Number(result.value));
    nuevaOperacion = true;
};

function escribirPI() {
    result.value =  Math.PI;
    nuevaOperacion = true;
};