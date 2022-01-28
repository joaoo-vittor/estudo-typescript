interface TipoNome {
  nome: string;
  sobrenome: string;
}

interface TipoPessoa extends TipoNome {
  nomeCompleto: () => string;
}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa = {
  nome: 'João',
  sobrenome: 'Barbosa',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('João', 'Silva');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
