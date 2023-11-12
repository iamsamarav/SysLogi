import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import Link from 'next/link';
import { useSpring, animated } from "@react-spring/web";

export default function Menu(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if(menuOpen){
            api.start({
                from: {
                  x: 100,
                },
                to: {
                  x: 0,
                },
              })
        }else{
            api.start({
                from: {
                  x: 0,
                },
                to: {
                  x: 100,
                },
              })
        }
    };

    const [animation, api] = useSpring(() =>{
        if(menuOpen){
            from: {x: 100}
        }else{
            from: {x: 0}
        }
      });

    return(
        <div onClick={toggleMenu} className="w-1/3 flex items-center justify-center h-full text-xl flex-col">
            <AiFillAppstore className="h-20 w-7 absolute"/>
            {menuOpen && (
        <animated.div className="relative -bottom-28 bg-cyan-300 rounded-l-2xl p-5 text-black box-border w-52 ...animation" style={animation}>
          <ul>
            <li className="border-black border p-2 rounded-l-full m-1">
              <Link href="/">Home
              </Link>
            </li>
            <li className="border-black border p-2 rounded-l-full m-1">
              <Link href="/sobre">
                Sobre
              </Link>
            </li>
            <li className="border-black border p-2 rounded-l-full m-1">
              <Link href="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </animated.div>
      )}
        </div>
    )
}