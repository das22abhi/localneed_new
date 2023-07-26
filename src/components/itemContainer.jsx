import React from 'react'
import handleClick from '../functions/handleclick';

function ItemContainer({ img, isFreeShipping, background, title, price, description }) {
    return (
        <div className='w-full' onClick={(e)=>handleClick(e,'#home')}>
            <div className={`w-full p-3 rounded-2xl ${background} flex flex-col items-center`}>
                <img src={img} className='object-cover w-full' alt="" />
                {isFreeShipping && <div className='w-full'>
                    <p className='text-white px-4 py-[6px] rounded-lg bg-black w-fit text-sm font-semibold'>Free shipping</p>
                </div>}
            </div>
            <div className='w-full pt-1'>
                <div className='w-full flex justify-between font-bold py-2'>
                    <p>{title}</p>  
                    <p>{price}</p>
                </div>
                <div className='w-full h-[43px] overflow-y-scroll text-sm text-gray-500 font-semibold overflow-hidden'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemContainer;