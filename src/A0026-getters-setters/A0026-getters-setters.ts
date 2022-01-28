export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }
}

const pessoa = new Pessoa('João', 'Silva', 23, '123.123.123-32');
pessoa.cpf = '000.000.000-32';
console.log(pessoa.cpf);
