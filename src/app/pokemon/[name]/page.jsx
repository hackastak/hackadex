import Image from 'next/image';
import styles from './page.module.css';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemonInfo(name) {
  const response = await fetch(baseUrl + "/" + name);
  const data = await response.json();

  return data;
}


const PokemonInfo = async ({params}) => {
  const data = await getPokemonInfo(params.name)
  const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  return (
    <div className={styles.pokeInfoContainer}>
      <div className={styles.pokeInfoHeader}>
        <h1>{name}</h1>
        <h1>{data.order}</h1>
      </div>
      <div>
        <Image src={data.sprites.other['official-artwork'].front_default} alt={name} width="100" height="100"/>
      </div>
    </div>
  )
}

export default PokemonInfo;