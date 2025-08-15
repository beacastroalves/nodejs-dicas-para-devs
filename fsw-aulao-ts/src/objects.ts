// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: 'Jane',
  age: 20,
  email: 'jane@doe.com',
  orders: [{ productId: '1', price: 150 }],
};

// const printLog = (message?: string) => {}
const printLog = (message: string) => {};

// o "!" é para dizer ao TS que o user.password tem valor e é para ignorar o "undefined"
printLog(user.password!);


// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ['1'],
  email: 'author@email.com',
  firstName: 'Autor',
  orders: []
};

// Interface
interface UserInterface {
  readonly firstName: string;
  email: string,
};

const emailUser: UserInterface = {
  email: "beatriz@email.com",
  firstName: "Beatriz",
};

interface AuthorInterface {
  books: string[];
};

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@email.com",
  firstName: "Beatriz",
  books: [],
};

type Grade = number | string;
const grade: Grade = 10;
