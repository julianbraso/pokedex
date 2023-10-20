type Props = {
    onChange: (input:string) => void;
}

export default function SearchBar(props: Props) {
    return <div className="sm:w-1/3 p-4">
        <input
    type="text"
    className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-300 dark:peer-focus:text-primary)]:placeholder:opacity-0"
    id="searchinput"
    placeholder="Search Pokemon..." 
    onChange={(e) => props.onChange(e.target.value)} />
    </div>
}