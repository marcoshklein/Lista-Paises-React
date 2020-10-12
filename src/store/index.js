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

  if (action.type === 'SET_SALVAR_PAIS') {

    const obj = state.paises.find(obj => obj._id === action.pais._id);
    if (obj) {
      state.paises = state.paises.filter(item => item !== obj)
    }
    state.paises.push(action.pais);
    state.paises.sort(function(a, b) {return a.name > b.name})

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