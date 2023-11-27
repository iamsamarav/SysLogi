import React, { useState } from "react";
import Link from 'next/link';
import { useSpring, animated } from "@react-spring/web";
import { TfiMenu } from "react-icons/tfi";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fade = useSpring({
    opacity: menuOpen ? 1 : 0,
    y: menuOpen ? 0 : -10,
    onRest: () => {
      if (!menuOpen) {
        setMenuClose(false);
      }
    },
  });

  const [menuClose, setMenuClose] = useState(false);

  const toggleTransform = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setMenuClose(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-full text-xl flex-col col-start-4 col-end-5">
      <TfiMenu onClick={toggleTransform} className="sm:h-20 sm:w-3.5 lg:h-20 lg:w-7 absolute cursor-pointer" />
      <animated.div className={menuClose ? "relative -bottom-28 rounded-2xl text-black box-border w-52 bg-blue-600 border border-black" : 'hidden'} style={fade}>
        <ul>
          <li className="border-black border p-2 rounded-full m-1 bg-blue-500">
            <Link prefetch={false} className="w-full justify-center flex" href="/">Home</Link>
          </li>
          <li className="border-black border p-2 rounded-full m-1 bg-blue-500">
            <Link prefetch={false} className="w-full justify-center flex" href="/sobre">Sobre</Link>
          </li>
          <li className="border-black border p-2 rounded-full m-1 bg-blue-300">
            <Link prefetch={false} className="w-full justify-center flex" href="/contato">Sair</Link>
          </li>
        </ul>
      </animated.div>
    </div>
  );
}
