import Image from "next/image";
import styles from "./page.module.css";

const baseUrl = "https://pokeapi.co/api/v2/";


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hack-A-Dex</h1> 
      <h3>A Pokedex Clone by Hackastak</h3>
      <div></div>
    </main>
  );
}
