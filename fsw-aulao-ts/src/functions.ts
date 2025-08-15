interface MathFunc {
  (x: number, y: number): number;
};

const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
};

const value = sum(2, 5);
const value2 = sub(3, 8);

// void usado apenas para funções
const log = (message: string): void => {
  console.log(message);
};

