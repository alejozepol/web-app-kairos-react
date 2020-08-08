
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
