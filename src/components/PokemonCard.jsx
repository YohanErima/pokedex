import { FastAverageColor } from 'fast-average-color';
import React, { useEffect, useState } from 'react'

function PokemonCard({ pokemon }) {
    const [bgColor, setBgColor] = useState(null);
    const getColorFromImage = async (urlImage) => {
        const fac = new FastAverageColor();
        const color = await fac.getColorAsync(urlImage);
        color.error ? setBgColor(null) : setBgColor(color.hex);
    }
    useEffect(() => {
        getColorFromImage(pokemon.image);
    })
    const types = pokemon.apiTypes.map(type => type.name);

    return (
        <div className='pokemon-card' style={{ backgroundColor: bgColor }}>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="card-infos">
                <h2>{pokemon.name}</h2>
                <p>#{pokemon.pokedexId}</p>
                <p>{types.length > 1 ? "Types: " + types.join(', ') : "Type: " + types[0]}</p>
            </div>
        </div>
    )
}

export default PokemonCard