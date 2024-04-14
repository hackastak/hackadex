import Image from "next/image";
import styles from "./component.module.css";

const getPokemonData = async(url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const ListCard = async({pokemon}) => {
  const data = await getPokemonData(pokemon.url)
  const name = pokemon.name.charAt(0).toUpperCase() + data.name.slice(1);

  return (
    <div className={styles.listCardContainer}>
      <Image src={data.sprites.other['official-artwork'].front_default} alt={data.name} width="60" height="60"/>
      <p>{name}</p>
    </div>
  )
}

export default ListCard