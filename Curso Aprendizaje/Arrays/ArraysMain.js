let Conjunto=[];

function Promedio(){

let promedio=0;

for(let i=0; i<Conjunto.length;i++)
{
    promedio=promedio+ parseInt(Conjunto[i])
}

promedio= promedio/Conjunto.length;

console.log(promedio);
let enseñar= document.getElementById("promedio");
enseñar.value=promedio;

}






function Agregar(){
let Numero=document.getElementById("numero").value;

console.log(Numero);

Conjunto.push(Numero);

console.log(Conjunto);

let Mostrar=document.getElementById("mostrarnumeros");
Mostrar.value= Conjunto;
}

