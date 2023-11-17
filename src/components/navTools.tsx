import React from 'react'
import Search from "./search";
import { FaArrowRight, FaArrowLeft, FaRegEyeSlash } from "react-icons/fa";

export default function NavTools() {
  return (
    <div className='flex row-start-auto row-end-3 col-span-full w-full h-full justify-center items-center border-b-2 '>
      <div className='w-1/5 items-center flex justify-end gap-2'>
        <span className='text-2xl'>Usuarios</span> <span className='text-2xl'><FaRegEyeSlash /></span>
      </div>
      <div className='w-3/5 flex justify-center'>
        <div className=' w-3/5 border-black border rounded-full'>
          <Search action={false} />
        </div>
      </div>
      <div className='w-1/6 flex'>
        <div className='flex flex-col justify-stretch w-full'>
          <div className='text-2xl flex'>
            <span>1</span> - <span>2</span>
          </div>
          <div className='flex gap-2'>
            <button><FaArrowLeft /></button>
            <button><FaArrowRight /></button>
          </div>
        </div>

      </div>
    </div>
  )
}
