type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  azul: 'blue',
  verde: 'green',
  vermelho: 'red',
};

export function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('verde', coresObj));
