import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();  

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
  };

  // informacoes
  const storeUser = (user: { email: string }) => {
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    router.push('/dashboard');
  }

  const removeUser = () => {

    const user = getUser();

    if (user && user.email) {
      localStorage.removeItem('user');
    }
    router.push('/auth/login');
  };

  const verifyAuth = () => {
    const user = getUser();

    if (user && user.email) {
      router.push('/dashboard');
      return;
    }
  }

  const verifyGuest = () => {
    const user = getUser();

    if (!user.email) {
      router.push('/auth/login');
      return;
    }
  }

  useEffect(() => {
    const userRaw = getUser();

    if (userRaw && userRaw.email) {     
      const user = userRaw;
      setEmail(user.email || '')
    }
  }, [])

  // retorna um resultado
  return {
    storeUser,
    verifyAuth,
    verifyGuest,
    removeUser,
    email
  }
}

export default useAuth