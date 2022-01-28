function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('João', 'vitor');

const pessoa = {
  nome: 'João',
  sobrenome: 'barbosa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
