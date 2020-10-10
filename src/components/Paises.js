import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';


// - Crie uma lista de cards para exibir os países mostrando a 
// bandeira, o nome e a capital dele; - Possibilite o usuário buscar países; 

// - Na lista, o usuário pode ir para a página de detalhes do país e ver uma lista mais completa de informações 
// (bandeira, nome, capital, área, população e top-level domain); 

// - Crie um formulário para editar os dados de um país (salvando apenas no client-side);

const Paises = ({ dados }) => {

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      dados.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <>
      <div className="col-md-3" style={{ marginTop: "20px" }}>

        <div>
          <input type="text" placeholder="Filtrar..." onChange={(e) => setSearch(e.target.value)} />
        </div>

        <br />

        {filteredCountries.map(pais => (

          <Card key={pais._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pais?.flag?.svgFile} />
            <Card.Body>
              <Card.Title>{pais.name}</Card.Title>
              <Card.Text>
                {pais.capital}
              </Card.Text>
              <Button variant="primary">Detalhes</Button>
            </Card.Body>
          </Card>
        ))
        }
      </div>
    </>
  );
};

export default Paises;