import React, { useState } from 'react'
import justification from '../assets/justification.png'
import indexes from '../constants/indexes'
import handleClick from '../functions/handleclick'

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className='w-full h-[12%] flex justify-center items-center'>
      <div className='h-full w-[90%] flex justify-between items-center mt-3'>
        <div className='text-[20px] font-bold sm:text-slate-700 text-white'>
          <p>LocalNeed</p>
        </div>
        <div className='w-[25%] flex justify-end md:justify-around items-center min-w-[200px] h-full text-sm font-semibold text-white'>
          {indexes.map((item,index)=>(
            <a href={item.link} className='hidden md:inline-block cursor-pointer' onClick={(e)=>handleClick(e,item.link)} key={index} >{item.name}</a>
          ))}
          <div className='relative'>
            <img src={justification} alt="" className='inline-block md:hidden' onClick={()=>setOpen(!open)} />
            <div className={`absolute top-14 left-0 overflow-hidden ${open ? 'h-[110px] flex flex-col justify-between' : 'h-0'} md:hidden z-10`}>
              {indexes.map((item,index)=>(
                <a href={item.link} onClick={(e)=>handleClick(e,item.link)} key={index} >{item.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute h-[200px] w-[200px] bg-amber-400 rounded-[50%] left-[-100px] top-[-110px] z-[-1]'></div>
      <div className='absolute w-[40px] h-[40px] rounded-[50%] bg-amber-400 top-[100px] left-[45%]'></div>
    </div>
  )
}

export default Navbar;