type Constructor = new (...args: any[]) => any;

@outroDecorador
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

function outroDecorador(targer: Constructor) {
  console.log('AQUI é o "outroDecorador"');
  return targer;
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  // console.log(param1, param2);
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

const animal = new Animal('toto', 'roxo');
console.log(animal);
