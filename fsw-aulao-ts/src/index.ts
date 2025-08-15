// Tipos Básicos
let age: number = 5;
const firstName: string = 'Bia';
const isValis: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, false, true];
const names: string[] = ['Bia', 'Castro', 'Alves'];

// Tupla
const person: [number, string] = [2, 'Jane'];

// Lista de tuplas
const people: [number, string][] = [
  [1, 'Jonh'],
  [2, 'Jane'],
  [3, 'Doe']
]

// Intersections
const productId: string | number = 2;

// Enum
enum Direction {
  Up = 1,
  Down = 2
}

const direction = Direction.Down;

// Type Assertions
const productName: any = 'Bone';

// let itemId = productName as string;
let itemId = <string>productName;

console.log(age);
