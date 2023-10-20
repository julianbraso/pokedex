import { ReactComponent as PokeApi } from "../assets/pokeapi.svg"

export const Home = () => {
    return <div className="App flex flex-col items-center justify-center font-sans font-semibold">
        <div>
            <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />
            <div className="flex text-center items-center justify-end pr-5">
                <span className="text-white">Powered by </span>
                <PokeApi className="w-24 pb-3" />
            </div>
        </div>
    </div>
}