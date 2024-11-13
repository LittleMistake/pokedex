import PokeDatos from "./fetch.jsx";

function CardsLayout() {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-2 gap-10 m-11">
                <div className="bg-amber-500 rounded-xl felx justify-center content-center"><PokeDatos/></div>
                <div className="bg-fuchsia-600 rounded-xl felx justify-center content-center"><PokeDatos/></div>
                <div className="bg-fuchsia-600 rounded-xl felx justify-center content-center"><PokeDatos/></div>
                <div className="bg-fuchsia-600 rounded-xl felx justify-center content-center"><PokeDatos/></div>
                <div className="bg-fuchsia-600 rounded-xl felx justify-center content-center"><PokeDatos/></div>
                <div className="bg-fuchsia-600 rounded-xl felx justify-center content-center"><PokeDatos/></div>
            </div>

        </>
    );
}

export default CardsLayout;