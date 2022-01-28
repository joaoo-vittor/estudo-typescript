/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nomeDoNameSpace = 'Joao';

  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  const pessoaDoNameSpace = new PessoaDoNameSpace('João');
  console.log(pessoaDoNameSpace);

  export namespace OutroNameSpace {
    export const nomeDoOutroNameSpace = 'Nome do outro namespace';
  }
}

const pessoaDoNameSpace = new MeuNameSpace.PessoaDoNameSpace('João');
console.log(pessoaDoNameSpace);
console.log(MeuNameSpace.nomeDoNameSpace);
console.log(MeuNameSpace.OutroNameSpace.nomeDoOutroNameSpace);

// export default 1;
