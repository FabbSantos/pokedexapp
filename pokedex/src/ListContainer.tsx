import React, { useEffect, useState } from "react";
import Card from './Card'


function ListContainer() {

    type Pokemon = {
        'name': String;
        'url': URL;
    }
    type ApiResults = {
        'results': Pokemon[];
    }
    const [pokemons, setPokemons] = useState<Pokemon[]> (new Array<Pokemon>())

    useEffect(()=> {
        async function LoadPokemons(callback: React.Dispatch<React.SetStateAction<Pokemon[]>>) {
    
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            const obj: ApiResults = await res.json()
    
            callback(obj.results)
        }
        LoadPokemons(setPokemons)

    }, [])





    return(
        <div className="list bg-bg bg-[length:100%_100%] w-[60%] h-screen pl-10 pt-40 overflow-y-auto scrollbar">
            { pokemons.map((p, i)=> <Card pokemon={p} key={i}/>) }
        </div>    
    )
}

export default ListContainer;