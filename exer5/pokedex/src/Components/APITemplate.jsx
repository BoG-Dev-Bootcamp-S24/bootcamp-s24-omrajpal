
function APITemplate(id) {
    const URL = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemonJSON = async () => {
        try {
            const response = await fetch(`${URL}/${id}/`);
            const pokemonJSON = await response.json();
            return pokemonJSON;
        } catch(e) {
            throw e;
        }
    }

    const pokemonJSON = getPokemonJSON();

    return pokemonJSON;
}

export default APITemplate;