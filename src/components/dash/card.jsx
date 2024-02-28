import React from 'react'

function Card(props) {
    const { title1, title2 } = props

    return (
        <div className="bg-primary relative overflow-hidden w-full py-4 text-white rounded-md flex flex-col justify-center px-3">
            <p className=''>{title1}</p>
            <p className='font-black text-xl'>{title2}</p>

            <div className='bg-primaryOpacity h-24 w-24 rounded-full absolute -left-20 -top-16'></div>
            <div className='bg-primaryOpacity h-24 w-24 rounded-full absolute -right-12 -bottom-12'></div>
        </div>
    )
}

export default Card