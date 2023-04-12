import { url } from 'inspector';
import bulba from './img/bulba.png'
import { useEffect, useState } from 'react';

// Deixar aqui pra mapear os animados no futuro

// declare type BlackWhite = {
//     'front_default':String;
// }
// declare type SpriteVersions = {
//     'generation-v': BlackWhite;
// }

 class PokemonSprites {
    'front_default': String;
}

 class PokemonInfo {
    'name': String;
    'sprites': PokemonSprites;
}

declare type Pokemon = {
    'name': String;
    'url': URL;
}


function Card ( props : { pokemon : Pokemon}) {
    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>(new PokemonInfo())

    useEffect(()=> {
        async function LoadInfo(callback: React.Dispatch<React.SetStateAction<PokemonInfo>>) {
            const res = await fetch(props.pokemon.url);
            const obj: PokemonInfo = await res.json()
            
            callback(obj)
        }

        LoadInfo(setPokemonInfo)

    }, [])

    
    return(
        <div className="card">
            <img src={bulba} alt="Bulbasaur" />
            <h3>#0001</h3>
            <h2>{props.pokemon.name}</h2>
        </div>

    )
}
export default Card