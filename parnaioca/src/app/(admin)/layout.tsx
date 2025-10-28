'use client';

import Menu from '@/components/molecules/Menu';
import Navbar from '@/components/atoms/Navbar';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import PageLoading from '@/components/atoms/PageLoading';

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
  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          <div className="flex gap-2">
            <div className="w-[16rem]">
              <Menu email={JSON.stringify(email)} />
            </div>
            <div className="w-full">
              <Navbar />
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
