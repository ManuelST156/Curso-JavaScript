//Fechas

//Objeto Date

let FechaActual= new Date();

console.log(FechaActual);
console.log(FechaActual.getDate());
console.log(FechaActual.getDay());
console.log(FechaActual.getMonth());
console.log(FechaActual.getHours());
console.log(FechaActual.getFullYear());

//TIMESTAMP

console.log(FechaActual.getTime());
console.log(Date.now());
console.log(+FechaActual);

let fechacontimestamp=new Date(-16920234567853);
console.log(fechacontimestamp);


//String

let fechastring= new Date("2021 jan 23");
console.log(fechastring);

//Date(año,mes,fecha,horas,minutos,segundo,ms)

let fechaDate= new Date(2021,0,31);
console.log(fechaDate);

//Setters

fechaDate.setFullYear(1990);
console.log(fechaDate)


//Ejercicio 1: mostrar la fecha actual con los dias de la semana en español con el siguiente formato, domingo 25 de julio de 2021

let Fecha= new Date(2021,6,25);
console.log(Fecha);
let Dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log(Fecha.getDay());

let Meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(`${Dias[Fecha.getDay()]}, ${Fecha.getDate()}, de ${Meses[Fecha.getMonth()]}, de  ${Fecha.getFullYear()}`);


//Ejercicio 2: Mostrar la hora actual en formato 03:15:15

let hora=new Date();
console.log(hora.toLocaleTimeString())


