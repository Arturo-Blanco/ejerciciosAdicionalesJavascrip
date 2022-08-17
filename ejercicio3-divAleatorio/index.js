let btnCrear=document.querySelector('.btnMagico');
let divMagico=document.querySelector('.divMagico');
let divContenedor=document.querySelector('.container');

btnCrear.addEventListener('click',() => {
    document.querySelector('.color').innerHTML = 'Color: ' + crearColorDiv();
    document.querySelector('.posicion').innerHTML= 'Posicion: ' + posicionDiv();
    document.querySelector('.dimension').innerHTML= 'Ancho: ' + anchoDiv() + ', Alto: '+ altoDiv(); 
    divMagico.style.backgroundColor= crearColorDiv();
    divMagico.style.width = anchoDiv();
    divMagico.style.height = altoDiv();
    divContenedor.style.justifyContent= posicionDiv();

})

    function crearColorDiv() {
        let valores= '0123456789ABCDEF';
        let color= '#' ;
                for(let i= 0; i < 6 ; i++) {
    color = color + valores[Math.floor(Math.random()* valores.length)];
    }
return color;
}
    function posicionDiv() {
        let arrPosiciones=['left','right' ,'center'];
            for(let i= 0; i< arrPosiciones.length  ; i++) {
    posiciones = arrPosiciones[Math.floor(Math.random()* arrPosiciones.length)];
    }
return posiciones;
} 
    function anchoDiv() {
            for(let i = 0 ; i < 500 ; i++) {
    width= [Math.floor(Math.random()*500)] + 'vw';
    }
return width;
}
    function altoDiv() {
            for(let i = 0 ; i < 500 ; i++) {
    height= [Math.floor(Math.random()*500)] + 'vh';
    }
return height;
}
/*
let tamañoDiv = () => {

for(let i = 0 ; i < 500 ; i++) {

    width= [Math.floor(Math.random()*500)] + 'px';
}
for(let i = 0 ; i < 500 ; i++) {

    height= [Math.floor(Math.random()*500)] + 'px';
} 
return [width,height];
}

let [ancho, alto] = tamañoDiv(); */