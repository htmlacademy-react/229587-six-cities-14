import type {Token} from './type-service';

const AUTH_TOKEN_NAME = 'six-cities';

const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);

  return token ?? '';
};

const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

export {getToken, saveToken, dropToken};
