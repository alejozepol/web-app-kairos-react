export const getEvento = (payload) => ({
  type: 'GET_EVENTO',
  payload,
});

export const setEvento = (payload) => ({
  type: 'SET_EVENTO',
  payload,
});

export const getEventoDB = (payload) => {
  return async (dispatch) => {
    dispatch(setEvento(await fb.getDocument('eventos', payload)));
  };
};

export const getEventos = (payload) => ({
  type: 'GET_EVENTOS',
  payload,
});

export const createEvento = (payload) => {
  return async (dispatch) => {
    dispatch(await fb.createSet('eventos', payload));
  };
};

export const createEventoUsuarioDB = (payload) => {
  return async (dispatch) => {
    dispatch(await fb.create('eventoUsuario', payload));
  };
};

export const deleteEventoUsuarioDB = (payload) => {
  return async (dispatch) => {
    dispatch(await fb.delete('eventoUsuario', payload));
  };
};

export const getEventoUsuario = (payload) => ({
  type: 'GET_EVENTO_USUARIO',
  payload,
});

export const getEventosUsuarios = (payload) => ({
  type: 'GET_EVENTOS_USUARIOS',
  payload,
});

export const getPersona = (payload) => ({
  type: 'GET_PERSONA',
  payload,
});

export const setPersona = (payload) => ({
  type: 'SET_PERSONA',
  payload,
});

export const getPersonaDB = (payload) => {
  return async (dispatch) => {
    dispatch(setPersona(await fb.getDocument('user', payload)));
  };
};

export const getPersonas = (payload) => ({
  type: 'GET_PERSONAS',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const signOut = (payload) => ({
  type: 'SIGN_OUT',
  payload,
});
