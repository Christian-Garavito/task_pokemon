import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function BuscarPokemon() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      // Recuperar el listado
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?Limit=20&offset=0");
      const listaPokemons = await response.json();
      const { results } = listaPokemons;

      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
        
      });
      
      setPokemon(await Promise.all(newPokemons));
    };
    getPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Pokedex</h1>
        {pokemons.map((poke) => (
          <div key={poke.id}>
            <img key={poke.img} src={poke.img} alt={poke.name} />
            <p key={poke.name}>{poke.name}</p>
            <span>{poke.id}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuscarPokemon;
