import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";
import Menu from "../components/menu";
import Search from "./search";

const jolly = Jolly_Lodger({
    style: 'normal',
    weight: '400',
    subsets: ['latin'],
})

export default function Header(){
    return(
        <div className="flex bg-blue-header w-screen h-full row-start-1 row-end-2 column-span-4 text-white flex-row">
            <div className="w-1/3 h-full flex flex-col justify-center items-center">
            <Link href="/" className={`${jolly.className} text-7xl`}> SysLogi</Link>
            <h2 className="text-lg">Cad1</h2>
            </div>
            <Search/>
            <Menu/>
        </div>
    )
}