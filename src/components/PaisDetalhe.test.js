import React from 'react';
import { mount } from 'enzyme';
import Routes from './../routes';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './../store/index';

describe('Renderizar componente Detalhes', () => {
  it('Deve renderizar o componente na rota edicao', () => {
    const component = mount(  
    <Provider store={store}>
      <MemoryRouter initialentries="{['/detalhe']}">
        <Routes />
      </MemoryRouter>
    </Provider>
    );
    expect(component).toBeDefined();
  })
});
