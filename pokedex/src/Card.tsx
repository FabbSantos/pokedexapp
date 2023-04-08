import bulba from './img/bulba.png'


function Card ( { pokemon }  : any) {
    return(
        <div className="card">
            <img src={bulba} alt="Bulbasaur" />
            <h3>#0001</h3>
            <h2>{pokemon.name}</h2>
        </div>
    )
}
export default Card