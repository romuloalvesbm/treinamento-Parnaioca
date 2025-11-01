'use client';

import Menu from '@/components/molecules/Menu';
import Navbar from '@/components/atoms/Navbar';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import PageLoading from '@/components/atoms/PageLoading';
import { MenuProvider, useMenuContext } from '@/context/MenuContext';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const { verifyGuest, email } = useAuth();

  useEffect(() => {
    verifyGuest();

    setLoading(false);
  }, [verifyGuest]);

  if (loading) return <PageLoading />;

  return (
    <MenuProvider>
      <LayoutContent email={email}>{children}</LayoutContent>
    </MenuProvider>
  );
}

// Componente separado que consome o contexto
function LayoutContent({ children, email }: { children: React.ReactNode; email: string }) {
  const { isOpen, toggleMenu, titulo } = useMenuContext();

  return (
    <div>
      <div className="flex">
        <div className={isOpen ? 'w-[16rem]' : 'hidden'}>
          <Menu email={email} />
        </div>
        <div className="w-full">
          <Navbar handleDrawerChange={toggleMenu} titulo={titulo} />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
