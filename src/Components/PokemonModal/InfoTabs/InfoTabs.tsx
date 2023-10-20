import { useEffect, useState } from "react"

const titles = [
    "stats", "moves", "abilities", "forms", "games", "species"
]

const StatsElement = ({ data }: { data: any }) => {
    const StatsItem = ({ name, base }: { name: string, base: string }) => {
        return <div className="flex justify-between border-t border-solid border-blueGray-200 sm:text-base text-sm">
            <span className="capitalize text-gray-600">{name}</span>
            <span className={`capitalize`}>{base}</span>
        </div>
    }
    return <div className={`flex h-full sm:w-1/2 w-full p-5`} >
        <div className="flex flex-col w-full">
            {data.map((e: any, n:number) => <StatsItem key={n} name={e.stat.name} base={e.base_stat} />)}
        </div>
    </div>
}

const MovesElement = ({ data }: { data: any }) => {
    return <div className={`flex h-full w-full p-5 justify-center`} >
        <div className="flex flex-wrap items-start justify-center max-w-md max-h-72 overflow-hidden overflow-y-scroll no-scrollbar">
            {data.map((e: any, n:number) => <span key={n} className="w-28 p-2 capitalize truncate overflow-auto text-xs font-normal shadow-[0_3px_10px_rgb(0,0,0,0.2)]">{e.move.name}</span>)}
        </div>
    </div>
}

const AbilitiesElement = ({ data }: { data: any }) => {
    return <div className={`flex h-full w-full p-5`} >
        <div className="flex flex-wrap max-w-md max-h-72 overflow-hidden overflow-y-scroll no-scrollbar">
            {data.map((e: any, n:number) => <span key={n} className="w-28 p-2 capitalize truncate overflow-auto text-xs font-normal border border-solid border-blueGray-200 m-1">{e.ability.name}</span>)}
        </div>
    </div>
}

const FormsElement = ({ data }: { data: any }) => {
    return <div className={`flex h-full w-full p-5`} >
        <div className="flex flex-wrap max-w-md max-h-72 overflow-hidden overflow-y-scroll no-scrollbar">
            {data.map((e: any, n:number) => <span key={n} className="w-28 p-2 capitalize truncate overflow-auto text-xs font-normal border border-solid border-blueGray-200 m-1">{e.name}</span>)}
        </div>
    </div>
}

const GamesElement = ({ data }: { data: any }) => {
    return <div className={`flex h-full w-full p-5`} >
        <div className="flex flex-wrap justify-center max-w-md max-h-72 overflow-hidden overflow-y-scroll no-scrollbar">
            {data.map((e: any, n:number) => <span key={n} className={`w-28 p-2 bg-${e.version.name}-500 capitalize truncate overflow-auto text-xs font-normal border border-solid border-blueGray-200 m-1`}>{e.version.name}</span>)}
        </div>
    </div>
}

const SpeciesElement = ({ data }: { data: any }) => {
    return <div className={`flex h-full w-full p-5`} >
        <div className="flex flex-wrap max-w-md max-h-72 overflow-hidden overflow-y-scroll no-scrollbar">
            <span className="w-28 p-2 capitalize truncate overflow-auto text-xs font-normal border border-solid border-blueGray-200 m-1">{data.name}</span>
        </div>
    </div>
}

export const InfoTabs = (props: { data: any }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const TitleElement = ({ name, id }: { name: string, id: number }) => {
        return <div className={`h-full w-1/6 flex items-center justify-center ${selectedTab == id ? "!bg-slate-0 border-x border-solid border-blueGray-200" : "bg-slate-100 hover:bg-slate-50 border-b border-solid border-blueGray-200"}`}
            onClick={() => setSelectedTab(id)}>
            <span className={`capitalize cursor-default select-none sm:text-sm text-xs`}>
                {name}
            </span>
        </div>
    }

    return (<div className="flex flex-col">
        <div className="w-full h-12">
            {/* Titles */}
            <div className="h-full w-full flex">
                {titles.map((e, n) => <TitleElement key={n} name={e} id={n} />)}
            </div>
        </div>
        <div className="w-full">
            {/* Content */}
            {titles[selectedTab] === 'stats' ? <StatsElement data={props.data.stats} /> :
                titles[selectedTab] === 'moves' ? <MovesElement data={props.data.moves} /> :
                    titles[selectedTab] === 'abilities' ? <AbilitiesElement data={props.data.abilities} /> :
                        titles[selectedTab] === 'forms' ? <FormsElement data={props.data.forms} /> :
                            titles[selectedTab] === 'games' ? <GamesElement data={props.data.game_indices} /> :
                                titles[selectedTab] === 'species' ? <SpeciesElement data={props.data.species} /> : <></>
            }
        </div>
    </div>);
}

{/* <div className="flex flex-col items-start">
        <span>Moves: </span>
    </div>
    <div className="flex flex-wrap items-start ml-2 border border-black">
        {props.data.moves.map((m: any, n: number) => <span className={`capitalize font-bold`}>{m.move.name}</span>)}
    </div> */}
