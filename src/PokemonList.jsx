// src/PokemonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonPromises = [];
            for (let i = 1; i <= 100; i++) { // Change the range as needed
                pokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
            }
            const pokemonResponses = await Promise.all(pokemonPromises);
            const pokemonData = pokemonResponses.map(response => response.data);
            setPokemons(pokemonData);
        };

        fetchPokemons();
    }, []);

    return (
        <div>
            {console.log("POKEMONS", pokemons)} 
            {pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ))}
        </div>
    );
};

export default PokemonList;