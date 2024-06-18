import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api.jsx";
import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Pokedex from "./Components/pokedex.jsx";
import Searchbar from "./Components/searchbar.jsx";
import { FavoriteProvider } from "./contexts/favoritesContext.jsx";

const favoritesKey = "f"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;