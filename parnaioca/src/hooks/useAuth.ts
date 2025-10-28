import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [email, setEmail] = useState('');

  const router = useRouter()

  // informacoes
  const storeUser = (user: { email: string }) => {
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    router.push('/dashboard');
  }

  const verifyAuth = () => {
    const userRaw = localStorage.getItem('user') || '{}';
    const user = JSON.parse(userRaw);

    if (user && user.email) {
      router.push('/dashboard');
      return;
    }
  }

  const verifyGuest = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.email) {
      router.push('/auth/login');
      return;
    }
  }

  useEffect(() => {
    const userRaw = localStorage.getItem('user') || '{}';

    if (userRaw) {
      const user = JSON.parse(userRaw);
      setEmail(user.email || '')
    }
  }, [])

  // retorna um resultado
  return {
    storeUser,
    verifyAuth,
    verifyGuest,
    email
  }
}

export default useAuth