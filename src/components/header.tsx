import Link from "next/link";
import { Alatsi, Oswald } from "next/font/google";
import Menu from "../components/menu";
import Search from "./search";
import ButtonHeader from "./buttonHeader";

// Icons
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { CgAdd, CgTrashEmpty } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";

interface HeaderProps {
    page: string
}

const alatsi = Alatsi({
    style: 'normal',
    weight: '400',
    subsets: ['latin'],
})

const oswald = Oswald({
    style: 'normal',
    weight: '400',
    subsets: ['latin']
}
)

export default function Header({ page }: HeaderProps) {
    return (
        <div className="grid grid-cols-4 bg-blue-header w-screen h-full row-start-1 row-end-2 column-span-4 text-white first-letter">
            <div className="h-full flex flex-col justify-center items-left col-start-1 col-end-2 text-center">
                <Link href="/" className={`${alatsi.className} text-6xl sm:text-4xl md:text-5x1 lg:text-6x1`}>SysLogi</Link>
                <h2 className={`text-3xl ${oswald.className}`}>{page}</h2>
            </div>
            <div className="w-full col-start-2 col-end-4 flex flex-row justify-around">
                <Search action={true} />
                <div className="flex justify-around sm:w-2/6 lg: items-center">
                    <ButtonHeader icon={<CgAdd />} />
                    <ButtonHeader icon={<CgTrashEmpty />} />
                    <ButtonHeader icon={<FaRegEdit />} />
                    <ButtonHeader icon={<FiChevronDown />} />
                </div>
            </div>
            <Menu />
        </div>
    )
}