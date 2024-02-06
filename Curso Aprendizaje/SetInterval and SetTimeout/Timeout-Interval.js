let ObtenerFecha=document.getElementById("fecha");
let reloj=document.getElementById("reloj");

//Declaracion variables
let Fecha= new Date();
console.log(Fecha);



let Dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let Meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

ObtenerFecha.innerHTML=`${Dias[Fecha.getDay()]}, ${Fecha.getDate()} ${Meses[Fecha.getMonth()]} ${Fecha.getFullYear()}`;

//Funcion Interval
setInterval(() => {
    let Hora= new Date();
    reloj.innerHTML=Hora.toLocaleTimeString();//`${Fecha.getHours()}:${Fecha.getMinutes()}:${Fecha.getSeconds()}`;
    console.log(reloj);


}, 1000);




