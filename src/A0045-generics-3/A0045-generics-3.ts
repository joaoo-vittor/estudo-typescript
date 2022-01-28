interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

export const aluno1: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

export const aluno2: PessoaProtocolo2<number, number> = {
  nome: 123,
  sobrenome: 123,
  idade: 30,
};
