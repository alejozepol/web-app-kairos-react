import { useState, useEffect } from 'react';

const API = 'https://staging.kairosshop.xyz/api';

const getApi = (url) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${API}/${url}`)
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

export default getApi;
