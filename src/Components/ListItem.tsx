type Props = {
    imgUrl: string;
    name: string;
    onClickCallback: () => void;
}

export function ListItem(props: Props) {
    return <div className="sm:w-40 w-28 sm:h-48 h-36 rounded-md shadow-2xl hover:bg-gray-300 hover:text-white" onClick={(e) => props.onClickCallback()}>
        <div className=" h-2/3 flex justify-center">
            <img className="h-full" src={props.imgUrl} alt="" />
        </div>
        <div className="flex items-center justify-center h-1/3 capitalize">
            <span >{props.name}</span>
        </div>
    </div>
}