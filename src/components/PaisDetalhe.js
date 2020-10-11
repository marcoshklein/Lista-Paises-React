import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const PaisDetalhe = ({ paisAtivo, history }) => {

  return (
    <>
    <Button onClick={() => history.goBack()} variant='secondary'>Voltar</Button>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={paisAtivo?.flag?.svgFile} />
      <Card.Body>
        <Card.Title>{paisAtivo?.name}</Card.Title>
        
        <ListGroup variant="flush">
        <ListGroup.Item>Capital - {paisAtivo?.capital}</ListGroup.Item>
        <ListGroup.Item>Área - {paisAtivo?.area}</ListGroup.Item>
        <ListGroup.Item>População - {paisAtivo?.population}</ListGroup.Item>
        <ListGroup.Item>Domínio - {paisAtivo?.topLevelDomains[0]?.name}</ListGroup.Item>
      </ListGroup>

        
      </Card.Body>
    </Card>

    </>
  );
}

const mapStateToProps = state => ({
  paisAtivo: state.paisAtivo
})

export default withRouter(connect(mapStateToProps)(PaisDetalhe));