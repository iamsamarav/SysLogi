import Link from "next/link";
import { Jolly_Lodger } from "next/font/google";

const jolly = Jolly_Lodger({
    style: 'normal',
    weight: '400',
    subsets: ['latin'],
})

export default function Header(){
    return(
        <div className="bg-blue-header w-screen h-full row-span-2 column-span-4 text-white">
            <Link href="/" className={jolly.className}> SysLogi</Link>
        </div>
    )
}