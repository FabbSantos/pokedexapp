import React, { useState } from "react";
import Card from './Card'


function ListContainer() {

    type Pokemon = {
        'name': String,
        'url': String
    }
    type ApiResults = {
        'results': Pokemon[]
    }

    const [pokemons, setPokemons] = useState<Pokemon[]> (new Array<Pokemon>())

    async function LoadPokemons(callback: React.Dispatch<React.SetStateAction<Pokemon[]>>) {

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0")
        const obj: ApiResults = await res.json()

        callback(obj.results)
    }

    LoadPokemons(setPokemons)


    return(
        <div className="list bg-bg bg-[length:100%_100%] w-[60%] h-screen pl-10 pt-40 overflow-y-auto scrollbar">
            { pokemons.map(p=> <Card pokemon={p} />) }
        </div>    
    )
}

export default ListContainer;