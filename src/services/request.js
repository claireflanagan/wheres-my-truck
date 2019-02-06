import store from '../store';

export const get = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${store.getState().auth.token}`
    }
  })
    .then(res => res.json());
};

export const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(res => res.json());
};

//make post that takes a url and a body
//fetch takes a url, {method you want to use and body} --- google search fetch javascript post
