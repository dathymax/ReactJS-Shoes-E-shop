import React from 'react'
import remove from "../../assets/actions/remove.svg"

const Remove = ({ title = "", description = "" }) => {
    return (
        <div className='flex items-center flex-col'>
            <img src={remove} alt="Remove product" />

            <div className="text-center mb-6">
                <p className='text-20 font-bold'>{title}</p>
                <p className='text-14-bbb'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Remove