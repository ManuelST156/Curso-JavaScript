//Crear nodos

//Forma 1 de agregar nodos y elementos
const Parrafo4=document.createElement('p');
const textParrafo4= document.createTextNode('Parrafo4');

//Forma 2 de agregar nodos y elementso
const Parrafo5=document.createElement('p');
Parrafo5.innerHTML='Parrafo5';

const Parrafo6=document.createElement('p');
Parrafo6.innerHTML='Parrafo6';


//Crear padre

const PadreDiv=document.querySelector('.padre');


//Padrear al nodo, es decir darle un padre

PadreDiv.appendChild(Parrafo4);
Parrafo4.appendChild(textParrafo4);

PadreDiv.append(Parrafo5,Parrafo6);







