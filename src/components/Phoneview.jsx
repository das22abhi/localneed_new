import React from 'react'

function Phoneview({ children}) {
    return (
        <div className='child1 w-[215px] py-2 flex justify-center items-center bg-gradient-to-br from-violet-300 to-indigo-200 rounded-[30px] phoneview'>
            {children}
        </div>
    )
}

export default Phoneview;

