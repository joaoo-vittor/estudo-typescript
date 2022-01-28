type Documento = {
  titulo: string;
  texto: string;
  data?: Date; // Encadeamento opcional
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'o texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString());
console.log(documento.data?.toDateString() ?? '1-Não exite data.');
console.log(undefined ?? '2-Não exite data.');
console.log(null ?? '3-Não exite data.');
console.log(false ?? '4-Não exite data.');
console.log(0 ?? '5-Não exite data.');
