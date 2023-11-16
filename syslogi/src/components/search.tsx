import { FaSearch } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { animated } from "react-spring";

export default function Search() {

    return (
        <div className="h-full flex flex-col items-center justify-around relative row-start-1 row-end-3 col-start-2 col-end-3">
            <div className="h-3/5 w-full flex flex-row items-end justify-center relative">
            <input className="w-full h-12 rounded-xl p-3 text-black focus:outline-none" placeholder="Busque uma funcionalidade" type="text" />
            <div className="absolute inset-y right-0 pr-2 flex items-center cursor-pointer h-12">
                <FaSearch className="text-blue-header" />
            </div>
            </div>
            <div className="h-2/5 flex items-center pointer-events-none">
                <FiChevronUp className="w-full h-12"/>
            </div>
        </div>
    )
}