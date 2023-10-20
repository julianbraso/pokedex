import React from "react";
import { InfoTabs } from "./InfoTabs/InfoTabs";
import PokemonImage from "../PokemonImage";

type Props = {
    data: any;
    show: boolean;
    closeClicked: () => void;
}

export default function PokemonModal(props: Props) {

    const getColorFromType = (type: string) => {
        return type === 'grass' ? "text-green-700" :
            type === 'poison' ? "text-purple-500" :
                type === 'fire' ? "text-red-500" :
                    type === 'water' ? "text-blue-400" :
                        type === 'electric' ? "text-yellow-400" :
                            type === 'ground' ? "text-yellow-900" :
                                type === 'fairy' ? "text-pink-300" :
                                    type === 'ice' ? "text-blue-200" :
                                        type === 'ghost' ? "text-purple-300" :
                                            type === 'bug' ? "text-green-200"
                                                : "";
    }

    return (
        <>
            {props.show ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto sm:max-w-3xl max-w-xs">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div>
                                    <div className="flex border-b border-solid border-blueGray-200 ">
                                        <PokemonImage data={props.data.sprites} />
                                        <div className="flex p-5">
                                            <div className="flex flex-col items-start sm:text-base text-xs">
                                                <span>Name: </span>
                                                <span>Weight:</span>
                                                <span>Height:</span>
                                                <span className="truncate">Base experience:</span>
                                                <span>ID:</span>
                                                <span>Type: </span>
                                            </div>
                                            <div className="flex flex-col items-start ml-4 sm:text-base text-xs">
                                                <span className="capitalize font-bold">{props.data.name}</span>
                                                <span className="capitalize font-bold">{props.data.weight}</span>
                                                <span className="capitalize font-bold">{props.data.height}</span>
                                                <span className="capitalize font-bold">{props.data.base_experience}</span>
                                                <span className="capitalize font-bold">{props.data.id}</span>
                                                <div className="flex flex-col items-start">
                                                    {props.data.types.map((e: any, n: number) => <span key={n} className={`capitalize ${getColorFromType(e.type.name)}`}>{e.type.name}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <InfoTabs data={props.data} />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center sm:h-16 h-10 border-t border-solid border-blueGray-200 rounded-b hover:bg-red-600">
                                    <button
                                        className="text-red-500 hover:text-white background-transparent font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full h-full"
                                        type="button"
                                        onClick={() => props.closeClicked()}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}