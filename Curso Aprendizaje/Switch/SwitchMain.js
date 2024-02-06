

function Conversion(){

let unidadOriginal=document.getElementById("UnidadesOriginales").value;
let unidadConvertida=document.getElementById("UnidadesaConvertir").value;
let valorOriginal=document.getElementById("valor").value;
let valorConvertido;

console.log(unidadOriginal);
console.log(valorOriginal);
console.log(unidadConvertida);

ConvertirUnidad(unidadOriginal,unidadConvertida,valorOriginal,valorConvertido);


}

function ConvertirUnidad(unidadOriginal,unidadConvertida,valorOriginal,valorConvertido)
{

    switch(true){
        //metro a centimetro
        case unidadOriginal=="Metro" && unidadConvertida=="Centimetro":

        valorConvertido=valorOriginal*100;
        document.getElementById("valorConvertido").value= valorConvertido+"cm";
        console.log(valorConvertido);


        break;

        //centimetro a metro
        case unidadOriginal=="Centimetro" && unidadConvertida=="Metro":
            valorConvertido=valorOriginal/100;
            document.getElementById("valorConvertido").value= valorConvertido+"m";
        console.log(valorConvertido);

        break;

        //metro a kilometro
        case unidadOriginal=="Metro" && unidadConvertida=="Kilometro":
            valorConvertido=valorOriginal/1000;
            document.getElementById("valorConvertido").value= valorConvertido+"km";
            console.log(valorConvertido);

        break;

        //kilometro a metro
        case unidadOriginal=="Kilometro" && unidadConvertida=="Metro":
            valorConvertido=valorOriginal*1000;
            document.getElementById("valorConvertido").value= valorConvertido+"m";
            console.log(valorConvertido);

        break;

        //centimetro a kilometro
        case unidadOriginal=="Centimetro" && unidadConvertida=="Kilometro":
            valorConvertido=valorOriginal/100000;
            document.getElementById("valorConvertido").value= valorConvertido+"km";
            console.log(valorConvertido);

        break;

        //kilometro a centimetro
        case unidadOriginal=="Kilometro" && unidadConvertida=="Centimetro":
            valorConvertido=valorOriginal*100000;
            document.getElementById("valorConvertido").value= valorConvertido+"cm";
            console.log(valorConvertido);


        break;
            

    }

   







}




