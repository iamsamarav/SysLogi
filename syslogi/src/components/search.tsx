import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <div className="w-1/3 h-full flex flex-row items-center justify-center relative">
            <input className="w-full h-12 rounded-xl p-3 text-black focus:outline-none" placeholder="Busque uma funcionalidade" type="text" />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                <FaSearch className="text-blue-header" />
            </div>
        </div>
    )
}