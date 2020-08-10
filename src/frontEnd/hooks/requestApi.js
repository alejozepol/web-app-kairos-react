import { useState, useEffect } from 'react';

const API = 'https://staging.kairosshop.xyz/api';

const headers = (method, body, token, userCredentials) => {
  if (token && body) {
    return {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
  }
  if (token && !body) {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
  }
  if (userCredentials && body) {
    return {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(userCredentials)}`,
      },
    };
  }
  if (userCredentials && !body) {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(userCredentials)}`,
      },
    };
  }
  if (body) {
    return {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const getApi = (url, token) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${API}/${url}`, headers('GET', null, token))
      .then((response) => response.json())
      .then(({ body, error }) => {
        if (error) {
          return console.error(res.error);
        }
        return body;
      })
      .then((data) => setState(data))
      .catch((error) => console.error(error));
  }, []);
  return state;
};

const postApi = (url, body, token, userCredentials) => {
  console.log(headers('POST', body, token, userCredentials));
  return fetch(`${API}/${url}`, headers('POST', body, token, userCredentials))
    .then((response) => response.json())
    .then(({ body, error }) => {
      if (error) {
        return console.error(res.error);
      }
      return body;
    })
    .then((data) => data)
    .catch((error) => console.error(error));
};

export { getApi, postApi };
