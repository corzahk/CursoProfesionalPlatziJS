// boolean

let muted: boolean = true;
muted = false;

//numeros

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// string
let nombre: string ="richard";
let saludo = `Me llamo ${nombre}`;

//arreglos

let people: string []  = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumbers: Array<string | number> = []
    peopleAndNumbers.push("ricandor")
    peopleAndNumbers.push (9000)


//enum

enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`)


//any
let comodin: any = "joker";
comodin = {type: "Wildcard"};

//object

let someObject: object = {type: "Wildcard"}

function add(a: number, b:number): number{
    return a +b;
}

const sum = add(4,5);

function createAdder (a:number): (number) => number {
    return function(b:number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}` 
}

const richard = fullName("richard")
console.log(richard)

//Interfaces

interface Rectangulo {
    ancho: number
    alto: number,
    color?: Color

}
let rect: Rectangulo = {
    ancho: 4,
    alto:6,
    color: Color.Rojo
  
}

function area (r:Rectangulo): number {
    return r.alto * r.ancho
}
const areaReact = area(rect);
console.log(areaReact);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());

