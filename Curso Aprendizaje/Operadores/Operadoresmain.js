function Suma()
{
    const numero1=parseFloat(document.getElementById("numero1").value);
    const numero2=parseFloat(document.getElementById("numero2").value);
    const resultado= numero1+numero2;
    document.getElementById("Resultado").innerText= resultado;
}

function Resta()
{
    const numero1=document.getElementById("numero1").value;
    const numero2=document.getElementById("numero2").value;
    const resultado= numero1-numero2;
    document.getElementById("Resultado").innerText= resultado;

    
}

function Division()
{
    let numero1,numero2;
    numero1=document.getElementById("numero1").value;
    numero2=document.getElementById("numero2").value;
    let resultado=numero1/numero2;
    document.getElementById("Resultado").innerText= resultado;
}

function Multiplicacion()
{
    let numero1,numero2;
    numero1=document.getElementById("numero1").value;
    numero2=document.getElementById("numero2").value;
    let resultado=numero1*numero2;
    document.getElementById("Resultado").innerText= resultado;
} 