import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function List(props: Props) {
    return <div className="bg-white w-2/3 h-4/5 max-w-3xl rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="flex flex-wrap justify-center gap-3 p-8 h-full w-fit overflow-y-scroll no-scrollbar">
            {props.children}
        </div>
    </div>
}
