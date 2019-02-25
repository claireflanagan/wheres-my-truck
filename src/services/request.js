import store from '../store';
import { getToken } from '../selectors/auth';

export const request = (url, method, body, token) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token || getToken(store.getState())}`
    },
    body: body && JSON.stringify(body)
  })
    .then(res => {
      return Promise.all([
        Promise.resolve(res),
        res.json()
      ]);
    })
    .then(([res, json]) => {
      if(res.status !== 200) throw json;
      return json;
    });
};

export const get = (url, token) => {
  return request(url, 'GET', null, token);
};

export const post = (url, body, token) => {
  return request(url, 'POST', body, token);
};

//make post that takes a url and a body
//fetch takes a url, {method you want to use and body} --- google search fetch javascript post
