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
        <div className="grid grid-rows-2 grid-cols-3 bg-blue-header w-screen h-full row-start-1 row-end-2 column-span-4 text-white">
            <div className="h-full flex flex-col justify-center items-center row-start-1 row-end-3 col-start-1 col-end-2 text-center">
            <Link href="/" className={`${jolly.className} text-7xl`}> SysLogi</Link>
            <h2 className="text-lg">Cad1</h2>
            </div>
            <Search/>
            <Menu/>
        </div>
    )
}