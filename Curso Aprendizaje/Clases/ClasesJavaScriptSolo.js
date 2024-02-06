const { setMaxListeners } = require("nodemailer/lib/xoauth2");



class Player{

constructor(nombre,colorSombrero){
    this._nombre=nombre; 
    this._colorSombrero=colorSombrero;

}

Saludar() {
    return `Hola soy ${this._nombre} y mi sombrero es de color: ${this._colorSombrero}`
}

get color(){
    return this._colorSombrero;
}

set color(nuevocolor){
this._colorSombrero=nuevocolor;
}

}


class Pet extends Player{
    constructor(nombre,colorSombrero,colorPiel){
        super(nombre,colorSombrero);
        this._colorPiel=colorPiel;
    }

    get colorPiel(){
        return `Color de Piel: ${this._colorPiel}`
    }

    set Piel(nuevaPiel){
        this._colorPiel=nuevaPiel;


    }

    comer(){
       return "Yo como arroz"; 
    }


    Saludar(){
        return super.Saludar()+ ' y soy un bicho'
    }//esto para sobrebreescribir cuando es una funcion nueva
}

let player1= new Player("Mario","Rojo");

let player2= new Player("Luigie","Verde");

console.log(player1);
console.log(player2);
console.log(player1.Saludar());

console.log(player1.color);

player1.color="azul";
console.log(player1.color);


let pet= new Pet("Yoshi","Invisibe","Verde");
console.log(pet);

console.log(pet.colorPiel);
console.log(pet.color);

pet.Piel="Negro";
console.log(pet.colorPiel);
console.log(pet.comer());

pet.color="Naranja";
console.log(pet.color);

console.log(pet.Saludar())

console.log(pet.Saludar())

