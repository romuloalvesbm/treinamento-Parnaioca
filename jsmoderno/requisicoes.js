// JS é uma linguagem assíncrona

const somar = (a, b) => {
  return a + b;
};

const subtrair = (a, b) => {
  return a - b;
};

// race condition
let contador = 0;

// delay
// setTimeout(() => {
//   contador = 10;
//   console.log('Estou dentro de um setTimeout', contador);
// }, 5000);

// console.log(contador);

// console.log(somar(2, 2));
// console.log(subtrair(2, 2));

// const resultado = () => {
//   return new Promise((resolve, error) => {
//     setTimeout(() => {
//       contador = 10;
//       error('Deu ruim hein papai');
//       console.log('Estou dentro de um setTimeout', contador);
//     }, 5000);
//   });
// };

// resultado()
//   .then(() => {
//     console.log(somar(2, 2));
//     console.log(subtrair(2, 2));
//   })
//   .catch((qquercoisa) => {
//     console.log(qquercoisa);
//   });

// método para fazer requisições = raw = resultado cru
// const resultado = fetch('https://viacep.com.br/ws/20761250/json/');

// resultado
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(`${res.logradouro} é minha rua!`);
//   });

const getLogradouro = async (cep) => {
  const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resultadoJson = await resultado.json();
  return resultadoJson;
};

// const minhafuncao = (valor) => {
//   return valor
// }
// const minhafuncao = valor => valor

// callback hell
// const logradouro = getLogradouro('20761250')
//   .then((res) => res.json())
//   .then((res) => {
//     fetch('URL_SERVICO')
//       .then(res => res.json())
//       .then(res => res.faccao)
//     console.log(res.logradouro);
//     return res.logradouro;
//   });

// const logradouro = getLogradouro('20761250')
//   .then((res) => res.json())
//   .then((res) => {
//     return res.logradouro;
//   });

// linhas de codigo que dependem do logradouro para tomar uma acao

const meuLogradouro = async () => {
  const { logradouro } = await getLogradouro('20761250');
  console.log(`Meu logradouro é: ${logradouro}`);
};

// aqui não sou mais uma promise
meuLogradouro();

// aqui ainda é promise
// console.log(getLogradouro('20761250'));

// getLogradouro('20761250').then((logradouro) =>
//   console.log(`Meu logradouro é: ${logradouro}`)
// );
