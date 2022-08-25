"use strict";
let inputText= document.querySelector('.text');
let invertedText='';

let btnStart=document.querySelector('.btnInvert');
btnStart.addEventListener('click', () => {
let texto= inputText.value;
//document.querySelector('.textEnd').innerHTML= "";
document.querySelector('.textStart').innerHTML= texto;
//document.querySelector('.textEnd').innerHTML= "";
inverText(texto);
}
)

function inverText(texto) {
    for(let i = texto.length-1; i>=0 ; i--) {
        invertedText += texto[i]
    }
   //document.querySelector('.textEnd').innerHTML= "";
    document.querySelector('.textEnd').innerHTML= invertedText;
}