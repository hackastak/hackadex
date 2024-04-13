
const baseUrl = "https://pokeapi.co/api/v2"

async function getPokemonList(){
  const response = await fetch(baseUrl + "/pokemon?limit=10000")
  const data = await response.json()

  return data
}

const PokemonList = async () => {
  const data = await getPokemonList()

  return (
    <div>
      <h1>Pokemon List</h1>
      {data.results.map((pokemon, index) => (
        <div className="" key={index}>
          <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
        </div>
      ))}
    </div>
  )
}

export default PokemonList
