"use strict";
let textStart=document.querySelector('.text');

let btnStart=document.querySelector('.btnInvert');
btnStart.addEventListener('click', () => {
cargarText();
})

function cargarText() {
    let text1 = textStart.value;
    document.querySelector('.textStart').innerHTML='El texto ingresado es: '+ text1
}

function inverText() {
    
}