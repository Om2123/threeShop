import React from 'react'

export default function page(props: any) {
    return (
        <div className=' '>
            <div className='flex'>
                {/* Filters Component */}
                <div>
                    {props.filters}
                </div>
                {/* Products */}
                <div className='md:basis-9/12 hover:shadow-2xl border-slate-100 border-2'>
                    {props.product}
                </div>
            </div>
        </div>

    )
}
