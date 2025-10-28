'use client';

import ButtonCreate from '@/components/atoms/ButtonCreate';
import { getAllUsers } from '@/services/users/getAll';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  active: boolean;
  lastLogin: string;
}

export const UsuariosPage = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await getAllUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>Total de 5 funcionários cadastrados</div>
        <ButtonCreate />
      </div>

      {/* TODO colocar um map de usuários neste bloco */}
      {users &&
        users.map(({ id, name, email, role, active, lastLogin }) => {
          return (
            <div key={id}>
              {name} - {email} - {role} - {active ? 'Ativo' : 'Inativo'} -{' '}
              {lastLogin}
            </div>
          );
        })}

      {pages.map((page) => (
        <div key={page}>
          <Link href={`/usuarios/${page}`}>
            Clique aqui para ir para a página {page}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsuariosPage;