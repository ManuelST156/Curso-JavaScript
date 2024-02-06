//Variables


let Contador=0;



//Recoger

let Imagenes=[];


let borrar= document.getElementById('InputImg');




function Agregar(){
    let Input=document.getElementById('InputImg').value;


    console.log(Input);
    
    Contador=0;
    Imagenes.push(Input);

    console.log(Imagenes);
    borrar.value="";

    

}

function Mostrar()
{
    document.getElementById("imagenes").src=Imagenes[Contador-1];
}

function Anterior()
{
    if(Contador>0)
    {
        Contador--;
        document.getElementById('h').textContent=Contador;
        
        Mostrar();
    
    }
    
}

function Siguiente()
{
    if(Contador<Imagenes.length)
    {
       
        Contador++;
        document.getElementById('h').textContent=Contador;
        Mostrar();   
    
    }
    
}

