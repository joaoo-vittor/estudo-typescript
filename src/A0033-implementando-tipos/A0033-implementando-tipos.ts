// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }
type TipoPessoa = {
  nome: string;
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements TipoPessoa, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('João', 'Silva');
console.log(pessoa.nomeCompleto());
