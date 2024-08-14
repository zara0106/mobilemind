import React from 'react'

function Parcours(props) {
    const { title, number, badge } = props

    return (

        <div className='bg-white w-full flex flex-col py-3 justify-center px-5 rounded-lg'>
            <h3 className='uppercase'>{title}</h3>
            <div className='mt-3'>
                <p className='text-black text-xl font-semibold'>{number}</p>
                <p>{badge}</p>
            </div>
        </div>
    )
}

export default Parcours