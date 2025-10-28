// const alunos = ['Carol', 'Joana'];
// // Carol = 0
// // Joana = 1
// console.log(alunos[1]);
// alunos[1] = string

// const aluna = {
//   nome: 'Joana',
// };
// console.log(aluna.nome);
// console.log(aluna['nome']);

// const fibonacchi = [1, 2, 3, 5, 8, 13]; // 5
// const item = fibonacchi[0]
// const item = fibonacchi[1]
// const item = fibonacchi[2]

// console.log(fibonacchi[4]);
// let valor = 0;
// fibonacchi.forEach((item) => {
//   valor = valor + item;
//   // posicao 0 = 0 + 1 ---- valor = 1
//   // posicao 1 = 1 + 2 ---- valor = 3
//   // posicao 2 = 3 + 3 ---- valor = 6
// });
// console.log('1 + 2 + 3 + 5 + 8 + 13', 1 + 2 + 3 + 5 + 8 + 13);
// console.log('valor', valor);

// NOME é aluna de JS Fullstack
// console.log(`${alunos[0]} é aluna de JS Fullstack`);
// console.log(`${alunos[1]} é aluna de JS Fullstack`);

// quantos itens tem na lista
// console.log(alunos.length);

// Callback = funcão anônima = () => {}
// alunos.forEach((aluno) => {
//   // const aluno = alunos[0]
//   // const aluno = alunos[1]
//   console.log(`${aluno} é aluna de JS Fullstack`);
// });

// alunos.forEach((aluno) => {
//   console.log(`${aluno} é aluna de JS Fullstack`);
// });

// const imprimirAluno = (aluno) => {
//   console.log(`${aluno} é aluna de JS Fullstack`);
// };

// imprimirAluno('Vitor');

// alunos.forEach(imprimirAluno);

// index = index + 1
// index = 0 + 1
// index = 1

// index = index + 1
// index = 1 + 1
// index = 2
// for (let index = 0; index < alunos.length; index++) {
//   // index == 0
//   // const aluno = alunos[index];
//   console.log(`${alunos[index]} é aluna de JS Fullstack`);
// }

// for (let posicao = 0; posicao < alunos.length; posicao = posicao + 1) {
//   console.log(`${alunos[posicao]} é aluna de JS Fullstack`);
// }
// for (const [index, aluno] of alunos.entries()) {
//   console.log(`${aluno} é aluna de JS Fullstack de index ${index}`);
// }

// let cont = 0;
// while (cont < alunos.length) {
//   console.log(`${alunos[cont]} é aluna de JS Fullstack`);
//   cont = cont + 1;
// }

// let cont = 0;
// do {
//   console.log(`${alunos[cont]} é aluna de JS Fullstack`);
//   cont = cont + 1;
// } while (cont < alunos.length);

// NOMES são alunas de JS Fullstack
// console.log(`${alunos.join(', ')} são alunas de JS Fullstack`);

// let texto = '';
// // Carol
// // Carol, Joana
// // Thiago
// const espacoentrealunos = ', ';
// for (let index = 0; index < alunos.length; index++) {
//   const aluno = alunos[index]; // Thiago
//   texto = index === 0 ? aluno : texto + espacoentrealunos + aluno; // Carol, Joana, Thiago
// }

// console.log(`${texto} são alunas de JS Fullstack`);

// const alunos = [
//   {
//     id: 1,
//     nome: 'carol',
//     estaPresente: true,
//     produtos: 30,
//   },
//   {
//     id: 2,
//     nome: 'joana',
//     estaPresente: true,
//     produtos: 40,
//   },
//   {
//     id: 3,
//     nome: 'thiago',
//     estaPresente: false,
//     produtos: 50,
//   },
// ];

// const nomesMaiusculos = alunos.map((aluno) => {
//   return aluno.nome.toUpperCase();
// });
// console.log(nomesMaiusculos);

// const texto = `${nomesMaiusculos.join(', ')} são alunos de JS`;
// console.log(texto);

// const novaLista = alunos.filter((aluno) => {
//   return aluno.estaPresente === true;
// });

// console.log(`novaLista`, novaLista);
// console.log(`alunos`, alunos);
// console.log(alunos[0]['nome']);
// alunos[1] = objeto
// console.log(alunos[1]['nome']);

// const filtrarAlunosPresentes = (aluno) => {
//   return aluno.estaPresente === true;
// };

// const alunosPresentes = alunos.filter(filtrarAlunosPresentes);

// const alunosPresentes = alunos.filter((aluno) => {
//   return aluno.estaPresente === true;
// });

// versao simplificada
// const filtrarAlunosPresentes = (aluno) => aluno.estaPresente;
// const alunosPresentes = alunos.filter(filtrarAlunosPresentes);

// const alunoFaltante = alunos.filter((aluno) => {
//   return !aluno.estaPresente;
// });

// console.log(alunoFaltante);

// const alunoPresente = alunos.find((aluno) => {
//   return aluno.estaPresente;
// });

// console.log(alunoPresente);

// const alunosUppercase = [];
// alunos.forEach((aluno) => {
//   const temp = {};
//   temp.id = aluno.id;
//   temp.nome = aluno.nome.toUpperCase();
//   temp.estaPresente = aluno.estaPresente;

//   alunosUppercase.push(temp);
// });

// console.log(alunosUppercase);

// const alunosUppercase = alunos.map((aluno) => {
//   return {
//     id: aluno.id,
//     nome: aluno.nome.toUpperCase(),
//     estaPresente: aluno.estaPresente,
//   };
// });

// console.log('alunos', alunos);
// console.log('alunosUppercase', alunosUppercase);

// () => () = Função que retorna um objeto
/**
 * () => {
 *   return {}
 * }
 */
// const alunosUppercase = alunos.map((aluno) => ({
//   id: aluno.id,
//   nome: aluno.nome.toUpperCase(),
//   estaPresente: aluno.estaPresente,
// }));

// const aluno = {
//   id: 1,
//   nome: 'Thiago',
//   estaPresente: false,
// };
// aluno.nome = 'CAROL'
// aluno.nome = 'Thiago'

// const novoValor = {
//   id: 1,
//   nome: 'Carol',
//   estaPresente: false,
//   nome: aluno.nome.toUpperCase(),
//   nome: 'Thiago',
// };
// console.log(novoValor);

// const alunosUppercase = alunos.map((aluno) => ({
//   ...aluno,
//   nome: aluno.nome.toUpperCase(),
// }));
// console.log('alunosUppercase', alunosUppercase);

// const usuariosAmericanos = ['John', 'Tobias'];
// const usuariosBrasileiros = ['Maria', 'Jade'];
// const usuarios = [...usuariosBrasileiros, ...usuariosAmericanos];

// console.log(usuarios);

// alunosUppercase[0].nome
// alunosUppercase.push(alunos[0].toUpperCase())
// alunosUppercase.push(alunos[1].toUpperCase())
// const alunosUppercase = alunos.map((aluno) => aluno.nome.toUpperCase());
// console.log(alunosUppercase);

// console.log(
//   `${alunos
//     .filter((aluno) => aluno.estaPresente)
//     .map((aluno) => aluno.nome.toUpperCase())
//     .join(', ')} são alunos presentes`
// );
// const numeros = [30, 40, 50];

// console.log(
//   alunos.reduce(
//     (anterior, atual) => {
//       return {
//         produtos: anterior.produtos + atual.produtos,
//       };
//     },
//     {
//       produtos: 0,
//     }
//   )
// );

// const somar = (a, b) => {
//   return a + b;
// };
// const diminuir = (a, b) => {
//   return a - b;
// };

// console.log(somar(1, 4));
// console.log(diminuir(2, 1));

// const funcoesMatematicas = [somar, diminuir];

// const lalala = funcoesMatematicas[0]
// const lelele = funcoesMatematicas[1]
// const [lalala, lelele] = funcoesMatematicas;

// const aluna = {
//   id: 2,
//   nome: 'Joana',
//   estaPresente: true,
//   produtos: 40,
// };

// const nome = aluna.nome;
// const id = aluna.id;
// const estaPresente = aluna.estaPresente;
// const produtos = aluna.produtos;
// const { nome, id, estaPresente, produtos } = aluna;

// console.log(produtos);

// console.log(lalala(5, 3));

// const mensagemDeOla = response.1025232.settings.greeting.bot.0.question.3.params.value

// console.log(mensagemDeOla)
// console.log(mensagemDeOla)
// console.log(mensagemDeOla)
// console.log(mensagemDeOla)
// console.log(mensagemDeOla)

const useUsers = () => {
  const users = [];

  const getUser = (name) => {
    return users.filter((user) => user.name === name);
  };
  const createUser = (user) => {
    users.push(user);
  };

  return {
    users,
    getUser,
    createUser,
  };
};

const { users, createUser } = useUsers();
createUser({
  id: 5,
  email: 'teste@teste.com',
});
console.log(users);
