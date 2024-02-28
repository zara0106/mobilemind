import React from 'react'

function Niveau(props) {
    const { title, bar } = props

    return (
        <div>
            <div className='flex justify-between text-[#606060] font-semibold'>
                <h1>{title}</h1>
                <p>{bar}%</p>
            </div>

            <div className='relative'>
                <div className={`absolute h-2 bg-primary rounded-md`} style={{width : `${bar}%`}}></div>
                <div className='h-2 w-full bg-[#1D993547] rounded-lg'></div>
            </div>

        </div>
    )
}

export default Niveau