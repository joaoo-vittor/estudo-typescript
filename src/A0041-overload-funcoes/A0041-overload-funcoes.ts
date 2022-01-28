type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...arg: number[]) => {
  if (arg.length > 0) return arg.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 1));
console.log(adder(1, 1, 1));
console.log(adder(1, 1, 1, 1));
