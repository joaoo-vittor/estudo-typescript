enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores2 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores2 {
  ROXO = 'ROXO',
  PRETO = 100,
  ROSA = 200,
}

console.log(Cores);
console.log(Cores2);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

console.log(Cores2[10]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO);
