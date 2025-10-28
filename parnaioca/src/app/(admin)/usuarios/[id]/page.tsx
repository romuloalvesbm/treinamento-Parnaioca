'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import FormUserEdit from '@/components/organisms/FormUserEdit';

export const UsuarioPage = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <FormUserEdit />
      <Link href="/usuarios">
        Clique aqui para ir para listagem de usuários
      </Link>
    </div>
  );
};

export default UsuarioPage;
