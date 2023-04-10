import bulba from './img/bulba.png'



declare type Pokemon = {
    'name': String,
    'url': String
}

function Card ( props : { pokemon : Pokemon}) {
    return(
        <div className="card">
            <img src={bulba} alt="Bulbasaur" />
            <h3>#0001</h3>
            <h2>{props.pokemon.name}</h2>
        </div>

    )
}
export default Card