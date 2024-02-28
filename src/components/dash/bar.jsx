import React from 'react'

function Bar(props) {
    const {height, title} = props

    return (
        <div className='h-full flex flex-col gap-y-3 justify-end'>
            <div className='w-full bg-primary rounded-xl' style={{height : `${height}%`}}></div>
            <p className='text-xs'>NIVEAU {title}</p>
        </div>
    )
}

export default Bar