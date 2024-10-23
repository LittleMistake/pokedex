
function SearchBar() {
    return(
        <form className="w-full ">
            <div className="relative h-10">
                <input type="text" id="pokemonName" placeholder="Search pokemon" className="w-full p-4 rounded-full bg-neutral-100"/>
                <button className="absolute right-0 top-5 -translate-y-5 p-4 bg-slate-200 rounded-full hover:bg-slate-500">
                    Buscar
                </button>
            </div>
        </form>
    )

}
export default SearchBar