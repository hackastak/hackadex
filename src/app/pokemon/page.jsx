import ListCard from "../../components/ListCard"
import styles from "./page.module.css"


const baseUrl = "https://pokeapi.co/api/v2"

async function getPokemonList(){
  const response = await fetch(baseUrl + "/pokemon?limit=10")
  const data = await response.json()

  return data
}

const PokemonList = async () => {
  const data = await getPokemonList()

  return (
    <div className={styles.hackadexListContainer}>
      <h1>Pokemon List</h1>
      <div className={styles.hackadexList}>
        {data.results.map((pokemon, index) => (
          <ListCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
