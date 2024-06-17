import {useEffect, useState} from "react";
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm";

export const PokemonProvider =({children})=>{

    const [allPokemon,setALLPokemons] = useState([]);
    const [globalPokemons,setGlobalPokemons] = useState([]);
    const [offset,setOffset] = useState(0);

    // utilizar customhook -useform
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: '',
    });

    //Estados para la alicacion simples
    const [loading,setLoading] = useState(true);
    const [active,setActive] = useState(false);

    // Llamar 50 pokemos a la Api
    const getALLPokemons = async(limit = 50)=>{
        const baseUrl = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        //console.log(data)

        const promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })
        const results = await Promise.all(promises);
        //console.log(results)
        setALLPokemons([...allPokemon,...results]);
        setLoading(false);
    }

    // llamar a todos los pokemoes 
    const getGlobalPokemons = async()=>{
        const baseUrl = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        //console.log(data)

        const promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        //console.log(results)
        setGlobalPokemons(results)
        setLoading(false);
    }

    // Llamar a un pokemon por id
    const getPokemonByID = async(id)=>{
        const baseURL ='https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseUrl}pokemon/${id}`)
        const data = await res.json()
        
        return data
    }

    useEffect(()=>{
        getALLPokemons()
    },[])

    useEffect(()=>{
        getGlobalPokemons()
    },[])






    return(
       <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID
       }}>
        {children}
       </PokemonContext.Provider>
    );
};