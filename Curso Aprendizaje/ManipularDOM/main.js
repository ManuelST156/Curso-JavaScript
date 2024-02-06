//Sin utilizar queryselecctor:
//document.getElementsByClassName--Cuando hablamos de clases
//document.getElementsByTagName--Cuando es por etiqueta
//document.getElementById--Cuando es por ID


/*Para modificar estilos

variable Ejemplo

Ejemplo.style.backgroud='white';  style.propiedad css
Ejemplo.style.textalign='center';  propiedades con guion se escriben juntas
*/

//Agregar elementos por ID

let elementoporID=document.querySelector('#parrafo1');
elementoporID.innerHTML='Elemento por ID';


//Elementos por clases
let ElementosClases=document.querySelectorAll('.parrafo');
console.log(ElementosClases);


//ElementosClases.innerHTML='Elementos por clases';

const arreglo=[...ElementosClases];
arreglo[1].innerHTML='Elementos por clases y arreglos';
console.log(arreglo[0]);


//Por etiqueta
let ElementosEtiquetas=document.querySelectorAll('p');
ElementosEtiquetas[2].innerHTML='Elementos por etiquetas';







