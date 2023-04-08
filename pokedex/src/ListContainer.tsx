import React, { useEffect, useState } from "react";
import Card from './Card'

function ListContainer(_props:any) {
    const [pokemon, setPokemon] = useState([]);


    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon").then(res =>{
            res.json().then( res =>{
             setPokemon(res.data.results.map((p: { name: any; })=>p.name));
            })
        })
    })
    console.log(pokemon)

    return(
        <div className="list bg-bg bg-[length:100%_100%] w-[60%] h-screen pl-10 pt-40">
 
            <Card pokemon={pokemon}     />
        </div>    
    )
}

export default ListContainer;