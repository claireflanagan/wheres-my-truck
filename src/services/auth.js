import { WebAuth } from 'auth0-js';

const authService = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URL,
  responseType: 'token id_token',
  scope: 'openid'
});

export const login = () => {
  authService.authorize();
};

export const handleAuthorization = () => {
  return new Promise((resolve, reject) => {
    authService.parseHash((err, result) => {
      if(result && result.accessToken && result.idToken) {
        return resolve(result.idToken);
      }
      return reject(err || 'Missing access token');
    });
  });
};
