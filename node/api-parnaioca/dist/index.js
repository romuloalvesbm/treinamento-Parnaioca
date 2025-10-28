"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8000;
// Array<User> é a mesma coisa de User[]
app.use(express_1.default.json());
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
    {
        id: 3,
        name: 'Carol',
        email: 'teste3@teste.com',
        password: 'teste123',
    },
    // {
    //   id: 3,
    //   nome: 'Carol',
    //   email: 'teste3@teste.com',
    //   senha: 'teste123',
    // },
];
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
    const result = users.find((user) => user.id === parseInt(req.params.id, 10)) ||
        'Usuário não encontrado';
    res.json({
        data: result,
    });
});
app.post('/user', (req, res) => {
    users.push(Object.assign({ id: users.length + 1 }, req.body));
    res.json({
        msg: 'Usuário criado com sucesso',
    });
});
app.put('/user/:id', (req, res) => {
    users = users.map((user) => {
        if (user.id === Number(req.params.id)) {
            return Object.assign(Object.assign({}, user), req.body);
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
app.listen(PORT, () => {
    console.log(`API Parnaioca ON - port: ${PORT}`);
});
