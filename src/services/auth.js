import { WebAuth } from 'auth0-js';
import { post, get } from './request';

const authService = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URL,
  responseType: 'token id_token',
  scope: 'openid'
});


export const signup = email => {
  return post('/api/admin/invite', { email });
};

export const login = () => {
  authService.authorize();
};

export const logout = () => {
  authService.logout({
    returnTo: `${window.location.protocol}//${window.location.host}/`
  });
};

export const handleAuthorization = () => {
  return new Promise((resolve, reject) => {
    authService.parseHash((err, result) => {
      if(result && result.accessToken && result.idToken) {
        return get('/api/admin', result.idToken)
          .then(({ role }) => {
            resolve({ token: result.idToken, role });
          });
      }
      return reject(err || 'Missing access token');
    });
  });
};
