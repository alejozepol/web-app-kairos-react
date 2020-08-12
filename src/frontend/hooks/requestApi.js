import { useState, useEffect } from 'react';

const API = 'https://api.kairosshop.xyz/api';

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
  console.log(url);
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${API}/${url}`, headers('GET', null, token))
      .then((response) => response.json())
      .then(({ body, error }) => {
        if (error) {
          return console.error(error);
        }
        console.log(body);
        return body;
      })
      .then((data) => setState(data))
      .catch((error) => console.error(error));
  }, [url]);

  return state;
};

const postApi = async (url, b, token, userCredentials, method = 'POST') => {
  console.log(headers(method, b, token, userCredentials));
  try {
    const response = await fetch(`${API}/${url}`, headers(method, b, token, userCredentials));
    const { body, error } = await response.json();
    if (error) {
      return console.error(error);
    }
    const data = body;
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export { getApi, postApi };
