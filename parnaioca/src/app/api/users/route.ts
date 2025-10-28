export const GET = async () => {
  // BFF - Forma de mascarar o backend real
  // const responseRaw = await fetch('https://viacep.com.br/ws/20761250/json/', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // });

  // const response = await responseRaw.json();
  // return Response.json(response)


  // mock de um backend real
  return Response.json([
    {
      id: 1,
      name: 'Vitor',
      email: 'teste1@teste.com.br',
      role: 'admin',
      active: true,
      lastLogin: '2025-01-01',
    },
    {
      id: 2,
      name: 'Guilherme',
      email: 'teste2@teste.com.br',
      role: 'user',
      active: true,
      lastLogin: '2025-01-01',
    },
     {
      id: 3,
      name: 'Romulo',
      email: 'teste2@teste.com.br',
      role: 'user',
      active: true,
      lastLogin: '2025-01-01',
    },
  ])
}