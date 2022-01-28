// const objetoA: Record<string, unknown> = {
//   chaveA: 'chaveA',
//   chaveB: 'chaveB',
// };

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'chaveA',
  chaveB: 'chaveB',
};

// objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';
