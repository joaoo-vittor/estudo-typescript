// O primeiro argumento da função é o tipo do this
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// só pode chamar a função com call quando se utiliza o this
funcao.call(new Date(), 'Luiz', 23);
funcao.apply(new Date(), ['Luiz', 23]);
