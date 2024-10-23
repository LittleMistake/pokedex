import PokeDatos from "./fetch.jsx";

function CardsLayout() {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-2 gap-10 m-11">
                <div className="bg-amber-500 rounded-xl">
                    <PokeDatos/>
                </div>
                <div className="bg-fuchsia-600 rounded-xl">
                    <img src="https://img.freepik.com/foto-gratis/vista-frontal-rana-arboricola-java-fruta-naranja_488145-218.jpg?t=st=1729075499~exp=1729079099~hmac=0b4ef262068324afba129b434ad111d5b2180c86d35826fa80f3d2e64aac8049&w=996" className="overflow-hidden"/>
                </div>
                <div className="bg-fuchsia-600 rounded-xl">1</div>
                <div className="bg-fuchsia-600 rounded-xl">1</div>
                <div className="bg-fuchsia-600 rounded-xl">1</div>
                <div className="bg-fuchsia-600 rounded-xl">1</div>
            </div>

        </>
    );
}

export default CardsLayout;