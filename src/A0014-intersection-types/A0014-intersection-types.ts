type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemIdade & TemSobrenome & TemNome; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 23,
  nome: 'Luiz',
  sobrenome: 'Otavio',
};

export { pessoa };
