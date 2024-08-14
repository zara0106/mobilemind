import React from 'react'

function Student(props) {
    const { firstName, lastName } = props

    return (
        <div className='bg-white p-3 rounded-md flex items-center gap-x-3'>
            <div className='h-10 w-10 rounded-full bg-gray-300'></div>
            <p>{firstName}
                {lastName}</p>
        </div>
    )
}

export default Student