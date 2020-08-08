
const API = 'https://api.kairosshop.xyz/api';

const reducer = (state, action) => {
  switch (action.type) {
    case '@@INIT': {
      const { cookie } = document;
      const output = {};
      if (cookie) {
        cookie.split(/\s*;\s*/).forEach((pair) => {
          // eslint-disable-next-line no-param-reassign
          pair = pair.split(/\s*=\s*/);
          output[pair[0]] = pair.splice(1).join('=');
        });
      }
      fetch(`${API}/categories`)
        .then((res) => res.json())
        .then(({ body, error }) => {
          if (error) {
            return console.error(res.error);
          }
          return body;
        })
        .then((res) => console.log(res));
      return {
        ...state,
        user: output,
      };
    }
    default:
      return state;
  }
};

export default reducer;
