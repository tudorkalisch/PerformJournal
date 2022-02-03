import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log('userToken in get: ', userToken);
    return userToken?.accessToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.accessToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
