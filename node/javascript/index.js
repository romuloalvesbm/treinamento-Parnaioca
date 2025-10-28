const express = require('express');
const app = express();
const PORT = 8000;

// é obrigatório por esta instrução caso eu queira receber body requisition em JSON
app.use(express.json());

let users = [
  {
    id: 1,
    name: 'Vitor',
    email: 'teste1@teste.com',
    password: 'teste123',
  },
  {
    id: 2,
    name: 'Joana',
    email: 'teste2@teste.com',
    password: 'teste123',
  },
];

// RESTFUL API - REST
// JSON - Linguagem universal para gerenciamento de dados
/**
 * GET - Coletar informações
 * POST - Criar informações
 * PUT - Atualizar informações
 * DELETE - Remover informações
 *
 * Status Code
 * 200 - OK
 * 400 - Bad Request
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status
 *
 * HEADERS
 * Content-Type = Conteúdo da requisição
 * Accept = Como aceito a resposta
 *
 */
app.get('/user', (req, res) => {
  let result = users;
  if (req.query.name) {
    result =
      result.filter((user) => user.name === req.query.name) ||
      'Usuário não encontrado';
  }

  res.json({
    data: result,
  });
});

app.get('/user/:id', (req, res) => {
  const result =
    users.find((user) => user.id === parseInt(req.params.id, 10)) ||
    'Usuário não encontrado';

  res.json({
    data: result,
  });
});

app.post('/user', (req, res) => {
  users.push({
    id: users.length + 1,
    ...req.body,
  });
  res.json({
    msg: 'Usuário criado com sucesso',
  });
});

app.put('/user/:id', (req, res) => {
  users = users.map((user) => {
    if (user.id === Number(req.params.id)) {
      return {
        ...user,
        ...req.body,
      };
    }
    return user;
  });

  res.json({
    msg: 'Usuário atualizado com sucesso',
  });
});

app.delete('/user/:id', (req, res) => {
  users = users.filter((user) => user.id !== Number(req.params.id));

  res.json({
    msg: 'Usuário removido com sucesso',
  });
});

// http://localhost:8000
// HTTP:// - Procotolo
// LOCALHOST (ou 127.0.0.1) - Dominio
// :8000 - Porta
// /user - Rota
app.listen(PORT, () => {
  console.log(`Server ON - port: ${PORT}`);
});
