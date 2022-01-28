// Declaration merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Joao',
  sobrenome: 'Silva',
  enderecos: ['Av. Brasil'],
  idade: 23,
};

console.log(pessoa);
