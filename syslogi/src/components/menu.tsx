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
      // Executa quando a animação termina
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
    <div className="w-1/3 flex items-center justify-center h-full text-xl flex-col">
      <AiFillAppstore onClick={toggleTransform} className="h-20 w-7 absolute" />
      <animated.div className={menuClose ? "relative -bottom-28 rounded-l-2xl text-black box-border w-52 bg-" : 'hidden'} style={fade}>
        <ul>
          <li className="border-black border p-2 rounded-l-full m-1 bg-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="border-black border p-2 rounded-l-full m-1 bg-blue-500">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="border-black border p-2 rounded-l-full m-1 bg-blue-500">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </animated.div>
    </div>
  );
}
