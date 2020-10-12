import * as Action from './../store/actions';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const PaisEdicao = ({ paisAtivo, dispatch, history }) => {
  const [pais, setPais] = useState(paisAtivo);

  function salvar() {
    dispatch(Action.setSalvarPais(pais));
    history.push('/')
  };

  return (

    <div style={{ margin: "20px" }}>
      <Button onClick={() => history.goBack()} variant='secondary'>Voltar</Button>

      <Form>
        <Form.Group controlId="FormNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={pais?.name || ''} onChange={e => setPais({ ...pais, name: e.target.value })}/>
        </Form.Group>

        <Form.Group controlId="formCapital">
          <Form.Label>Capital</Form.Label>
          <Form.Control type="text"value={pais?.capital || ''} onChange={e => setPais({ ...pais, capital: e.target.value })}/>
        </Form.Group>

        <Form.Group controlId="formArea">
          <Form.Label>Área</Form.Label>
          <Form.Control type="text" value={pais?.area || ''} onChange={e => setPais({ ...pais, area: e.target.value })}/>
        </Form.Group>

        <Form.Group controlId="formPopulation">
          <Form.Label>População</Form.Label>
          <Form.Control type="text" value={pais?.population || ''} onChange={e => setPais({ ...pais, population: e.target.value })} />
        </Form.Group>

        <Button variant="primary" onClick={() => salvar()}>
          Salvar
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  paisAtivo: state.paisAtivo
})

export default withRouter(connect(mapStateToProps)(PaisEdicao));