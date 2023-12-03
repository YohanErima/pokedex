import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import axios from 'axios';

function Pokedex() {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/100').then(response => {
            if (response.status >= 200 && response.status < 300) {
                setPokemons(response.data);
            }
        }).catch(err => console.err(err));

    }, [])
    return (
        <div className='container'>
            {pokemons ? pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />) : <h1>Erreur de récupération de pokémons</h1>}
        </div>
    )
}

export default Pokedex