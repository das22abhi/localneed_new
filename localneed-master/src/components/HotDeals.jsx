import React from 'react'
import ItemContainer from './itemContainer';
import sales from '../constants/sales'

function HotDeals() {
    return (
        <div className='w-full  justify-center flex mt-[100px]'>
            <div className='w-[90%]'>
                <p className='mb-8 ml-2 text-[30px] font-bold'>Hot deals</p>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
                    {sales.map((item, index) => (
                        <ItemContainer
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HotDeals;