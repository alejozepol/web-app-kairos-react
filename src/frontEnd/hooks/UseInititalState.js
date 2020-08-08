import { useState, useEffect } from 'react';

const UseInitialSatete = (API) => {
  const [state, setState] = useState({ categories: [], products: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  return state;
};

export default UseInitialSatete;
