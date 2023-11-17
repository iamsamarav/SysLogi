import { FaRegEdit, FaSearch } from "react-icons/fa";
import { CgAdd, CgPen, CgTrashEmpty } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { animated } from "react-spring";

export default function Search() {

    return (
        <div className="h-full flex flex-row items-center justify-center relative row-start-1 row-end-3 col-start-2 col-end-5 box-border">
            <div className="h-3/5 w-2/3 flex flex-row items-center justify-center relative row-start-1 row-end-2">
            <input className="w-full h-10 rounded-xl p-3 text-black focus:outline-none" placeholder="Busque uma funcionalidade" type="text" />
            <div className="absolute inset-y right-0 pr-2 flex items-center cursor-pointer h-10">
                <FaSearch className="text-blue-header" />
            </div>
            </div>
            <div className="row-start-2 row-end-3 w-1/3 flex justify-around">
                <div className="flex items-center border w-10 h-10 justify-around rounded-full p-2 border-black cursor-pointer bg-white">
                <CgAdd/>
                </div>
                <div className="flex items-center border  w-10 h-10 justify-around rounded-full p-2 border-black cursor-pointer bg-white">
                <FaRegEdit/>
                </div>
                <div className="flex items-center border w-10 h-10 justify-around rounded-full p-2 border-black cursor-pointer bg-white">
                <CgTrashEmpty/>
                </div>
                <div className="flex items-center border w-10 h-10 justify-around rounded-full p-2 border-black cursor-pointer bg-white">
                <FiChevronDown/>
                </div>
            </div>
        </div>
    )
}