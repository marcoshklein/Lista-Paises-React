import gql from 'graphql-tag';

export const GET_PAISES = gql`
{ 
	Country {
    _id,
    name,
    capital,
    flag{svgFile},
    area,
    population,
    topLevelDomains {
      name
    }
 } 
}
`;