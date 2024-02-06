//Eliminar nodos

//Forma 1 de agregar nodos y elementos
const Parrafo4=document.createElement('p');
const textParrafo4= document.createTextNode('Parrafo4');




//Crear padre

const PadreDiv=document.querySelector('.padre');


//Padrear al nodo, es decir darle un padre

PadreDiv.appendChild(Parrafo4);
Parrafo4.appendChild(textParrafo4);


//Para eliminar removeChild

const Parrafo3=document.querySelector('#parrafo3');
const Parrafo2=document.querySelector('#parrafo2');

PadreDiv.removeChild(Parrafo3);


//Eliminar con remove()

/* Parrafo4.remove(); */


//Reemplazar con un elemento vigente;



PadreDiv.replaceChild(Parrafo3,Parrafo4);



//Introduccion listener

Parrafo2.addEventListener('click',()=>{
    Parrafo2.innerHTML='Hola';
})











