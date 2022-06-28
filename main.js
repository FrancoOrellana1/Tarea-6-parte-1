/*TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).*/

const $agregar = document.querySelector('#agregar');


$agregar.onclick = function(event){
    
    const $cantidad = document.querySelector('#cantidad').value;

    validarAgregar($cantidad);
    crearNuevosElemento($cantidad);

    crearBotonCalcular();
    const $calcular = document.querySelector('#calcular');

    $calcular.onclick= function(){

        const listaEdades = document.querySelectorAll('#edad');
        const arrayEdades = [];
        for(i=0; i<listaEdades.length; i++){
            if(listaEdades[i].value !== ''){
                arrayEdades.push(listaEdades[i].value)
            }
            
        }

        calcularMenorEdad(arrayEdades);
        calcularMayorEdad(arrayEdades);
        calcularPromedioEdad(arrayEdades);
    }
    event.preventDefault();
}

const $eliminar = document.querySelector('#reset');
$eliminar.onclick = function(){
    eliminarElmentos();
}

function validarAgregar (a){

    if(!/^[0-9]+$/.test(a)){
        return 'Este campo solo acepta numeros';
    }
    if(a.length === 0){
        return 'Este campo no debe estar vacio';
    }
    if(a.length >2){
        return 'Este campo no debe mas de 2 numeros';
    }
    return '';
}

function crearNuevosElemento (a){

    for(let i=0; i < a; i++){
        let numero = i + 1;
        const crearFila = document.querySelector('div');
        const nuevaFila = document.createElement ('div');
        const nuevoParrafo = document.createElement('p')
        nuevoParrafo.innerText = ('Edad integrante N°' + numero);
        crearFila.appendChild(nuevoParrafo);
        nuevaFila.innerHTML = ('<input type="number" id="edad"></input>');
        crearFila.appendChild(nuevaFila);
    }
    return false;
}

function crearBotonCalcular (){
    document.querySelector('#calcular').className = '';
    
    return false;

}

function calcularMenorEdad(a){
    let menorEdad = a[0];

        for(i=0; i<a.length; i++){
                if(menorEdad>a[i]){
                    menorEdad= a[i];
                }
        }
        const agregarMenorEdad = document.querySelector('div');
        const textoMenorEdad =document.createElement ('li');
        textoMenorEdad.innerText = ('La menor edad es ' + menorEdad);
        agregarMenorEdad.appendChild(textoMenorEdad);
        
    
    return false;

}

function calcularMayorEdad (a){
    let mayorEdad = a[0];

        for(i=0; i<a.length; i++){
            if(mayorEdad<a[i]){
                mayorEdad= a[i];
            }
        }
        const agregarMayorEdad= document.querySelector('div');
        const textoMayorEdad = document.createElement('li');
        textoMayorEdad.innerText = ('La mayor edad es ' + mayorEdad);
        agregarMayorEdad.appendChild(textoMayorEdad);
        
    return false;
}

function calcularPromedioEdad (a){
    let promedioEdad = 0;
        for(i=0; i<a.length; i++){
            promedioEdad +=Number(a[i]);
            console.log(promedioEdad);
        }
        promedioEdad= (promedioEdad/a.length);

        const agregarPromedioEdad = document.querySelector('div')
        const textoPromedioEdad = document.createElement('li');
        textoPromedioEdad.innerText = ('El promedio de edad es de ' + promedioEdad);
        agregarPromedioEdad.appendChild(textoPromedioEdad);
        

        return false;
}


function eliminarElmentos (){

    const $integrantes = document.querySelectorAll('#edad')
    const $parrafos = document.querySelectorAll('p');
    for(i=0; i<$integrantes.length; i++){
        $integrantes[i].remove();
        $parrafos[i].remove();
    }
    document.querySelector('#calcular').className = 'oculto';
    const $li = document.querySelectorAll('li');
    for(i=0; i<$li.length; i++){
        $li[i].remove();
    }

}

function eliminarResultados(){

}