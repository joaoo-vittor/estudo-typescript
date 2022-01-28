const objeto1: Record<string, string | number> = {
  nome: 'joao',
  sobrenome: 'silva',
  idade: 23,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

const objeto2: PessoaProtocol = {
  nome: 'joao',
  sobrenome: 'silva',
};

console.log(objeto2);

// Required
type PessoaRequired = Required<PessoaProtocol>;

const objeto3: PessoaRequired = {
  nome: 'joao',
  sobrenome: 'silva',
  idade: 23,
};

console.log(objeto3);

// Partial
type PessoaPartial = Partial<PessoaProtocol>;

const objeto4: PessoaPartial = {
  nome: 'joao',
  sobrenome: 'silva',
  idade: 23,
};

console.log(objeto4);

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

const objeto5: PessoaReadonly = {
  nome: 'joao',
  sobrenome: 'silva',
  idade: 23,
};

console.log(objeto5);

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto6: PessoaPick = {
  nome: 'joao',
  sobrenome: 'silva',
};

console.log(objeto6);

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// example
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'cncodsn90d1dnien',
  nome: 'joao',
  idade: 30,
  sobrenome: 'silva',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);

console.log(accountApi);

// Module mode
export default 1;
