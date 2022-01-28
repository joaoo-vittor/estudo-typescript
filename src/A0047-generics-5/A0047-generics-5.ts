export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('João', 23);
const pessoa2 = new Pessoa(['João'], 23);
const pessoa3 = new Pessoa(['João'], { idade: 23 });

// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  size(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.showStack();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
