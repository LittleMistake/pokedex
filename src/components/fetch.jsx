import {useEffect, useState} from "react";

function PokeDatos() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const num =  Math.floor(Math.random()* 6)+1;
        const url = `https://pokeapi.co/api/v2/pokemon/` + `${num}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const handledData = handleData(data)
                setData(handledData)
            })

    }, []);

    function handleData(data) {
        const tipos = []
        const {types} = data

        for (let t in types) {
            const {type} = types[t];
            const {name} = type;
            tipos.push(name)
        }

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
                    <li className="flex justify-center content-center text-3xl">{data.name}</li>
                    <li className="flex justify-center content-center"><img className="size-40" src={data.foto} alt={data.name}/></li>
                    <div className="grid grid-flow-col auto-cols-auto">{data.tipos.map((tipo) => (<li className='flex justify-center content-center text-2xl ' key={tipo}>{tipo}</li>))}</div>
                </>
            ) : (<p>Loading</p>)}
            {/*{data?.map((pokemon) => (<li key={pokemon.name}>{pokemon.name}</li>))}*/}
        </ul>)
}

export default PokeDatos;
