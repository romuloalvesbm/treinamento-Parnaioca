## Pousada Parnaioca API

- O cliente pode se cadastrar (nome, email, senha);
- O cliente pode escolher um quarto;
- O cliente vai dizer quanto tempo ficará com o quarto;

- O sistema precisa ter um administrador
- O administrador precisa manter quartos (CRUD);
- O administrador precisa manter usuários;
- O administrador precisa a hospedagem dos clientes (saber quem está em qual quarto e por quanto tempo);

- O sistema precisa ser seguro (cada usuário é um usuário único);
- Se remover um usuário e ele for um cliente, tem q remover o cliente do quarto caso ele esteja hospedado;
- Se eu remover o quarto e este quarto tiver um cliente hospedado, eu tenho que tirar o cliente deste quarto;
- Se eu inativar um quarto (manutenção, crime) e este quarto tiver um cliente hospedado, eu tenho que tirar o cliente deste quarto;
