import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import Link from 'next/link';
import { useSpring, animated } from "@react-spring/web";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fade = useSpring({
    opacity: menuOpen ? 1 : 0,
    y: menuOpen ? 0 : -20,
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
    <div className="flex items-center justify-center h-full text-xl flex-col row-span-2 col-start-3 col-end-4">
      <AiFillAppstore onClick={toggleTransform} className="h-20 w-7 absolute cursor-pointer" />
      <animated.div className={menuClose ? "relative -bottom-28 rounded-2xl text-black box-border w-52 bg-blue-600 border border-black" : 'hidden'} style={fade}>
        <ul>
          <li className="border-black border p-2 rounded-full m-1 bg-blue-500">
            <Link className="w-full justify-center flex" href="/">Home</Link>
          </li>
          <li className="border-black border p-2 rounded-full m-1 bg-blue-500">
            <Link className="w-full justify-center flex" href="/sobre">Sobre</Link>
          </li>
          <li className="border-black border p-2 rounded-full m-1 bg-red-950">
            <Link className="w-full justify-center flex" href="/contato">Contato</Link>
          </li>
        </ul>
      </animated.div>
    </div>
  );
}
