import { gql, useQuery } from "@apollo/client";

const pokeQuery = gql`
  query samplePokeAPIquery {
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
          {species.name}
        </li>
      ))}
    </>
  );
}

export default Homepage;
