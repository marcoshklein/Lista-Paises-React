import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import apolloClient from '../apolloClient';
import { GET_PAISES } from '../queries';
import * as Action from './../store/actions';

// Requisitos
// - Crie uma lista de cards para exibir os países mostrando a bandeira, o nome e a capital dele; 
// - Possibilite o usuário buscar países; 
// - Na lista, o usuário pode ir para a página de detalhes do país e ver uma lista mais completa de informações 


function Paises({ paises, dispatch, history }) {

  function goToPaisDetalhe(pais) {
    dispatch(Action.setDetalhePais(pais));
    history.push('/detalhe')
  }

  function consultarPaises() {
    apolloClient.query(GET_PAISES)
      .then(result => {
        dispatch(Action.setDadosPaises(result.data.Country));
      });
  };

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    consultarPaises()
  }, []);

  useEffect(() => {
    setFilteredCountries(
      paises?.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [paises, search]);

  return (
    <>
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <div>
          <input type="text" placeholder="Filtrar..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        <br />
          {filteredCountries?.map(pais => (

            <Card className="p-3" key={pais._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pais?.flag?.svgFile} />
              <Card.Body>
                <Card.Title>{pais.name}</Card.Title>
                <Card.Text>
                  {pais.capital}
                </Card.Text>
                <Button onClick={() => goToPaisDetalhe(pais)} variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  paises: state.paises
})

export default withRouter(connect(mapStateToProps)(Paises));