//1 PUSH

let arreglo1=[1,2,3,4,5];

arreglo1.push(8);

console.log(arreglo1);

//2 POP
let arreglo2=[1,2,3,4,5];
arreglo2.pop();
console.log(arreglo2);

//3 UNSHIF

let arreglo3=[1,2,3,4,5];
arreglo3.unshift(9);
console.log(arreglo3);


//4 SHIF

let arreglo4=[1,2,3,4,5];
arreglo4.shift();
console.log(arreglo4);

//5 SPLICE

let arreglo5=[1,2,3,4,5];

arreglo5.splice(2,4,0,2,0);

console.log(arreglo5);

//6 SLICE

let arreglo6=[1,2,3,4,5]; 

let result6=arreglo6.slice(1,3);
console.log(result6);


//7 CONCAT
let arreglo7=[1,2,3,4];

let strings=["one","two","three","four"];

let newarray= arreglo7.concat(strings);
console.log(newarray);

//8 INDEXOF
let arreglo8=["one","two","three","four"];
console.log(arreglo8.indexOf("two"));


//9 INCLUDES

let arreglo9=[1,2,3,4,5];

console.log(arreglo9.includes("hola"));

//10 FIND

let arreglo10=[
    {id:1,name: 'Manuel'},
    {id:2,name: 'Julio'},
    {id:3,name: 'Ernesto'},

];

let result10= arreglo10.find(item=>item.id==2);
console.log(result10);


//11 FINDINDEX

let arreglo11=[
    {id:1,name: 'Manuel'},
    {id:2,name: 'Julio'},
    {id:3,name: 'Ernesto'},

];

let result11= arreglo11.findIndex(index=>index.name=='Manuel');

console.log(result11);


//12 FILTER
let arreglo12=[
    {id:1,name: 'Manuel'},
    {id:2,name: 'Julio'},
    {id:3,name: 'Ernesto'},

];

let result12=arreglo12.filter(item=>item.id<=2);
console.log(result12);

//13 FOREACH
let arreglo13=[1,2,3,4,5];
let result13=[];
arreglo13.forEach(item=>result13.push(item*10));
console.log(result13);


//14 MAP
let arreglo14=[1,2,3,4,5];

let result14= arreglo14.map(item=>item*10);

console.log(result14);

//15 SORT
let arreglo15=[7,25,8,3,10,5];
arreglo15.sort((a,b)=>a-b);
console.log(arreglo15);

//16 REVERSE

let arreglo16=[7,25,8,3,10,5];
arreglo16.reverse();
console.log(arreglo16);

//17 SPLIT

let string= 'amanecer';

let result17= string.split('e');
console.log(result17);

//18 JOIN

let arreglo18=['one','two','three'];
let result18= arreglo18.join('-');
console.log(result18);

19//REDUCE

let arreglo19=[7,25,8,3,10,5];

let result19=arreglo19.reduce((sum,index)=>sum+index,0);
console.log(result19);









