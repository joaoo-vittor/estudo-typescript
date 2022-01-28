export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  // private readonly colaboradores: readonly Colaborador[] = []; // o segundo readonly é do array e o primero do atributo
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  // structuralType
  nome: 'Jose',
  sobrenome: 'Otavio',
});

console.log(empresa1);
// console.log(empresa1.nome);

empresa1.mostrarColaboradores();
