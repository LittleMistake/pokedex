import {useEffect, useState} from "react";


function PokeDatos() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/charizard")
            .then(res => res.json())
            .then(data => {

                const handledData = handleData(data)
                console.log(handledData)
                setData(handledData)

            })

    }, []);

    function handleData(data) {
        const tipos = []
        const {types} = data;
        for (let t in types) {
            const {type} = types[t];
            const {name} = type;
            tipos.push(name)
        }
        console.log(tipos)
        // Parte de nombre y foto
        const {sprites} = data;
        const {front_default: pokemonImage} = sprites;
        const {name: pokemonName} = data
        const objetoPokemon = {
            foto: pokemonImage,
            name: pokemonName,
            tipos: tipos
        }
        return objetoPokemon;
    }

    return (
        <ul>
            {data ? (
                <>
                    <li>{data.name}</li>
                    <li><img src={data.foto} alt={data.name}/></li>
                    {data.tipos.map((tipo) => (<li key={tipo}>{tipo}</li>))}
                </>
            ) : (<p>Loading</p>)}
            {/*{data?.map((pokemon) => (<li key={pokemon.name}>{pokemon.name}</li>))}*/}
        </ul>)
}

export default PokeDatos;
