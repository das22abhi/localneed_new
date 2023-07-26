import React from 'react'
import latest from '../constants/latest';
import ItemContainer from './itemContainer'

function Latest() {
  return (
    <div className='w-full  justify-center flex mt-[100px]'>
            <div className='w-[90%]'>
                <p className='mb-8 ml-2 text-[30px] font-bold'>Latest products</p>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
                    {latest.map((item, index) => (
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

export default Latest;