import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const pokeQuery = gql`
  query pokemonQuery {
    gen3_species: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: {} } }
      order_by: { id: asc }
    ) {
      name
      id
    }
  }
`;

function Homepage() {
  const { loading, error, data } = useQuery(pokeQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <li>Pokemon</li>
      {data.gen3_species.map((species) => (
        <li key={species.id} value={species.name}>
          <Link to={`/pokemon/${species.id}`}>{species.name}</Link>
        </li>
      ))}
    </>
  );
}

export default Homepage;
