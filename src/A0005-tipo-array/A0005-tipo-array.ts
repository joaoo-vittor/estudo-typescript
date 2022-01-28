// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCaseArgs(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4);
const concatenacao = concatenaArgs('a', 'b', 'c');
const toUpperCaseResult = toUpperCaseArgs('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(toUpperCaseResult);
