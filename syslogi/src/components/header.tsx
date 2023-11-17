import Link from "next/link";
import { Alatsi, Oswald } from "next/font/google";
import Menu from "../components/menu";
import Search from "./search";

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

export default function Header(){
    return(
        <div className="grid grid-rows-2 grid-cols-5 bg-blue-header w-screen h-full row-start-1 row-end-2 column-span-4 text-black">
            <div className="h-full flex flex-col justify-center items-left row-start-1 row-end-3 col-start-1 col-end-2 text-center">
            <Link href="/" className={`${alatsi.className} text-6xl`}> SysLogi</Link>
            <h2 className={`text-3xl ${oswald.className}`}>Cad1</h2>
            </div>
            <Search/>
            <Menu/>
        </div>
    )
}