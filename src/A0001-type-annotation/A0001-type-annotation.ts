/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeString: Array<string> = ['1', '2'];
let arrayDeString2: string[] = ['1', '2'];

// Objeto

let pessoa: {nome: string, idade: number, aduto?: boolean} = {
  idade: 30,
  nome: 'Joao'
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2,2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
