import { useEffect, useState } from "react"
import { List } from "../Components/List"
import { ListItem } from "../Components/ListItem"
import { API_URL } from "../utils/constants"
import PokemonModal from "../Components/PokemonModal/PokemonModal"
import SearchBar from "../Components/SearchBar"

export const PokemonList = () => {
    const [data, setData] = useState<any[]>([]);
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    async function getData() {
        await fetch(API_URL).then(res => res.json()).then(res => setData(res.results));
    }

    async function getPokemonData() {
        let l: any[] = [];
        await data.map((i) => fetch(i.url).then((res) => res.json()).then(res => { l.push(res); setPokemonData([...l, res]); }));
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (data.length > 0 && pokemonData.length < 1) getPokemonData();
    }, [data]);

    useEffect(() => {
        console.log(pokemonData);
    }, [pokemonData]);

    return <div className="App flex flex-col items-center sm:justify-center font-sans font-semibold ">
        <h1 className="text-white text-3xl sm:mt-0 mt-6 sm:mb-5 font-semibold">Pokemons</h1>
        <PokemonModal data={pokemonData[selectedPokemon]} show={showModal} closeClicked={() => setShowModal(false)} />
        <SearchBar onChange={setSearchInput} />
        <List>
            {pokemonData.filter((e)=> e.name.includes(searchInput)).map((p: any, n: number) => <ListItem onClickCallback={() => { setShowModal(true); setSelectedPokemon(n); }} imgUrl={p.sprites.front_default} name={p.name} />)}
        </List>
    </div>
}