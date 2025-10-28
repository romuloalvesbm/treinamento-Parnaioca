// console.log('Agora estou no arquivo Dados');
// condicionantes

// booleano - boolean - bool: true (1) false (0)
// const isTeacher = true;

// console.log(isTeacher);

// const aluno1 = 'Joana';
// const aluno2 = 'Carol';

// console.log(aluno1 === aluno2);

// const vasco = 5;
// const flamengo = '5';

// 5 e '5' são valores iguais? (SIM)
// tipo number e tipo string são iguais? (NÃO)

// console.log(vasco === flamengo); // SIM para valores e NÃO para o tipo

// Comparar valores
// == comparando valores se são iguais
// === comparando valores se são iguais e também se os tipos são iguais (completemante)
// != comparando valores se são diferentes
// !== comparando valores se são diferentes e também se os tipos são diferentes (completemante)

// OBJETOS conjunto de chaves (elemento - atributo) e valores
// const identidade = {
//   id: 10923809182390,
//   nome: 'Vitor Esteves',
//   temCPF: true,
//   idade: 39,
// };

// const doguizinho = {
//   apelido: 'Fluffy',
//   raca: 'Vira-Lata',
//   cor: 'caramelo',
// };

// const aluno = {
//   nome: 'Carol',
//   modulo: 'JS Moderno',
//   taComSono: true,
// };

// console.log(identidade.nome); // Vitor Esteves;
// console.log(identidade);

// id (number), nome(string), uf(string), multas(number)
const vitorCnh = {
  id: 98890,
  nome: 'Vitor Esteves',
  uf: 'MG',
  multas: 4,
};

const joanaCnh = {
  id: 25242525425242,
  nome: 'Joana Dias',
  uf: 'RJ',
  multas: 5,
};

const carolCnh = {
  id: 19281831831,
  nome: 'Caroline Martins',
  uf: 'SP',
  multas: 2,
};

// `Texto qualquer ${valor_interpretado_pelo_js} texto qualquer`
// "Texto qualquer " + valor_interpretado_pelo_js + " texto qualquer"
// const valor_interpretado_pelo_js = 'MEU VALOR';
// console.log(`Texto qualquer ${valor_interpretado_pelo_js} texto qualquer`);
// console.log('Texto qualquer ' + valor_interpretado_pelo_js + ' texto qualquer');

// console.log('Vitor Multas', vitorCnh.multas);
// console.log('Joana Multas', joanaCnh.multas);
// console.log('Carol Multas', carolCnh.multas);

// console.log('Joana e Carol estão na mesma UF?', joanaCnh.uf === carolCnh.uf);
// console.log('Joana e Vitor estão na mesma UF?', joanaCnh.uf === vitorCnh.uf);
// console.log('Carol e Vitor estão na mesma UF?', carolCnh.uf === vitorCnh.uf);

// function NOME(PARAMENTROS) { CONTEXTO }

// funcoes void
// Função moderna = arrow function = Função de seta = callback
//
const alertarFimDeAula = () => {
  console.log('Vitor! tem que acabar a aula às 17h');
};

// funcao tipo string
// function validarUF(pessoa1, pessoa2) {
//   console.log('ESTOU DENTRO DA FUNCAO');

//   return `${pessoa1.nome} e ${pessoa2.nome} estão na mesma UF? ${
//     pessoa1.uf === pessoa2.uf
//   }`;
// }

// const resultado = validarUF(vitorCnh, carolCnh);
// console.log(resultado);

// function somar(num1, num2) {
//   return num1 + num2;
// }

// const percentual = (total) => {
//   console.log((total * 10) / 100);
// };

// const resultado = somar(6, 9);
// console.log(resultado);
// const resultado = somar(6, 10);
// percentual(resultado);

// console.log(validarUF(vitorCnh, carolCnh));

// criem uma função onde eu passe 2 pessoas como parametro e que retorne o nome
// da pessoa que tem mais multas

// const pessoaQueTemMaisMultas = (pessoa1, pessoa2) => {
//   const multa1 = pessoa1.multas;
//   const multa2 = pessoa2.multas;

//   console.log(`Multa da pessoa ${pessoa1.nome}`, multa1);
//   console.log(`Multa da pessoa ${pessoa2.nome}`, multa2);
//   console.log(
//     `Multa da pessoa ${pessoa1.nome} é maior que a Multa da pessoa ${pessoa2.nome}?`,
//     multa1 > multa2
//   );

//   // se as multas da pessoa 1 forem maiores que o da pessoa 2, retorne o nome da pessoa 1
//   // caso contrário, retorne o nome da pessoa 2

//   if (pessoa1.multas > pessoa2.multas) {
//     return `O nome de quem tem mais multas é ${pessoa1.nome}`;
//   } else if (pessoa1.multas === pessoa2.multas) {
//     return `Tanto ${pessoa1.nome} quanto ${pessoa2.nome} tem a mesma quantidade de multas`;
//   } else {
//     return `O nome de quem tem mais multas é ${pessoa2.nome}`;
//   }

//   // ternário CONDICIONANTE ? SE VERDADEIRO : SE FALSO
//   // return pessoa1.multas > pessoa2.multas
//   //   ? `O nome de quem tem mais multas é ${pessoa1.nome}`
//   //   : `O nome de quem tem mais multas é ${pessoa2.nome}`;
// };

// const resultado = pessoaQueTemMaisMultas(joanaCnh, carolCnh);
// console.log(resultado);

// criem uma função onde eu passe 2 pessoas como parametro e retorne
// o nome em extenso do Estado de cada pessoa

// const transformarUFEmEstado = (uf) => {
//   if (uf === 'RJ') {
//     return 'Rio de Janeiro';
//   }

//   if (uf === 'SP') {
//     return 'São Paulo';
//   }

//   if (uf === 'MG') {
//     return 'Minas Gerais';
//   }
// };

// const qualEhOEstado = (pessoa1, pessoa2) => {
//   return `A pessoa ${pessoa1.nome} é de ${transformarUFEmEstado(
//     pessoa1.uf
//   )} e a pessoa ${pessoa2.nome} é de ${transformarUFEmEstado(pessoa2.uf)}`;
// };

// const qualEhOEstado = (pessoa1, pessoa2) => {
//   let estadoPessoa1 = '';

//   if (pessoa1.uf === 'RJ') {
//     estadoPessoa1 = 'Rio de Janeiro';
//   }

//   if (pessoa1.uf === 'SP') {
//     estadoPessoa1 = 'São Paulo';
//   }

//   if (pessoa1.uf === 'MG') {
//     estadoPessoa1 = 'Minas Gerais';
//   }

//   let estadoPessoa2 = '';
//   if (pessoa2.uf === 'RJ') {
//     estadoPessoa2 = 'Rio de Janeiro';
//   }

//   if (pessoa2.uf === 'SP') {
//     estadoPessoa2 = 'São Paulo';
//   }

//   if (pessoa2.uf === 'MG') {
//     estadoPessoa2 = 'Minas Gerais';
//   }

//   return `O estado da pessoa ${pessoa1.nome} é ${estadoPessoa1} e o estado da pessoa ${pessoa2.nome} é ${estadoPessoa2}`;
// };

// const qualEhOEstado = (pessoa1, pessoa2) => {
//   let estadoPessoa1 = '';
//   switch (pessoa1.uf) {
//     case 'RJ':
//       estadoPessoa1 = 'Rio de Janeiro';
//       break;
//     case 'SP':
//       estadoPessoa1 = 'São Paulo';
//       break;
//     case 'MG':
//       estadoPessoa1 = 'Minas Gerais';
//       break;

//     default:
//       estadoPessoa1 = '';
//       break;
//   }

//   let estadoPessoa2 = '';
//   switch (pessoa2.uf) {
//     case 'RJ':
//       estadoPessoa2 = 'Rio de Janeiro';
//       break;
//     case 'SP':
//       estadoPessoa2 = 'São Paulo';
//       break;
//     case 'MG':
//       estadoPessoa2 = 'Minas Gerais';
//       break;

//     default:
//       estadoPessoa2 = '';
//       break;
//   }

//   return `O estado da pessoa ${pessoa1.nome} é ${estadoPessoa1} e o estado da pessoa ${pessoa2.nome} é ${estadoPessoa2}`;
// };

const qualEhOEstado = (pessoa1, pessoa2) => {
  const estados = {
    RJ: 'Rio de Janeiro',
    SP: 'São Paulo',
    MG: 'Minas Gerais',
  };

  return `O estado da pessoa ${pessoa1.nome} é ${
    estados[pessoa1.uf]
  } e o estado da pessoa ${pessoa2.nome} é ${estados[pessoa2.uf]}`;
};

const resultado = qualEhOEstado(vitorCnh, carolCnh);
console.log(resultado);

alertarFimDeAula();

// loop para pegar chaves e valores de um objeto (FOR IN)
// const aluno = {
//   id: 1,
//   nome: 'Joana',
//   endereco: 'Rua lalala',
// };

// for (let key in aluno) {
//   console.log(`O campo ${key} tem o valor de ${aluno[key]}`);
// }

// console.log(Object.entries(aluno));

// for (let i = 0; i < Object.entries(aluno).length; i++) {
//   console.log(
//     `O campo ${Object.entries(aluno)[i][0]} tem o valor de ${
//       Object.entries(aluno)[i][1]
//     }`
//   );
// }
