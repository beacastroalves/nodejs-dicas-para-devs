// Tipos Básicos
let age = 5;
const firstName = 'Bia';
const isValis = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false, true];
const names = ['Bia', 'Castro', 'Alves'];
// Tupla
const person = [2, 'Jane'];
// Lista de tuplas
const people = [
    [1, 'Jonh'],
    [2, 'Jane'],
    [3, 'Doe']
];
// Intersections
const productId = 2;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
// Type Assertions
const productName = 'Bone';
// let itemId = productName as string;
let itemId = productName;
console.log(age);
export {};
//# sourceMappingURL=index.js.map