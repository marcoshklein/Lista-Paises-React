import { createStore } from 'redux';


function reducer(state, action) {
  console.log(state)
  if (action.type === 'SET_PAISES') {

    return {
      ...state,
      paises: action.paises
    }
  }

  if (action.type === 'SET_DETALHE_PAIS') {

    return {
      ...state,
      paisAtivo: action.pais
    }
  }

  return {
    paises: null,
    paisAtivo: null
  };
}

const store = createStore(reducer);

export default store;