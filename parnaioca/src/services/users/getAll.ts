export const getAllUsers = async () => {
  const responseRaw = await fetch('/api/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return await responseRaw.json();
};