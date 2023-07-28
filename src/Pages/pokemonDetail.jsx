import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const pokemonDetail = gql`
  query samplePokeAPIquery($PokemonID: Int!) {
    gen3_species: pokemon_v2_pokemonspecies(
      where: { id: { _eq: $PokemonID } }
    ) {
      name
      id
      is_mythical
      is_baby
      pokemon_v2_pokemonspeciesflavortexts(
        limit: 1
        order_by: { version_id: desc }
        where: { language_id: { _eq: 9 } }
      ) {
        flavor_text
        language_id
        version_id
      }
    }
  }
`;

function PokemonDetail() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(pokemonDetail, {
    variables: { PokemonID: id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const species = data.gen3_species[0];
  return (
    <>
      <p>{species.name}</p>
      <p>{species.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text}</p>
      <p>
        <Link to={`/`}>Back</Link>
      </p>
    </>
  );
}

export default PokemonDetail;
