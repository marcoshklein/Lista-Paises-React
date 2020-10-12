import React from 'react';
import { mount } from 'enzyme';
import Routes from './../routes';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './../store/index';


describe('Renderizar componente Principal', () => {
  it('Deve renderizar o componente na rota principal', () => {
    const component = mount(  
    <Provider store={store}>
      <MemoryRouter initialentries="{['/']}">
        <Routes />
      </MemoryRouter>
    </Provider>
    );
    expect(component).toBeDefined();
  })
});