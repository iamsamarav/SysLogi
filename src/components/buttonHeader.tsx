import { FaRegEdit, FaSearch } from "react-icons/fa";
import { CgAdd, CgPen, CgTrashEmpty } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";

interface UserProps {
    icon: React.ElementType
  }

export default function ButtonHeader({ icon } : UserProps){

    return(
        <div className="flex items-center border w-10 h-10 justify-around rounded-full p-2 border-black cursor-pointer bg-white">
            {icon} 
        </div>
    )
}