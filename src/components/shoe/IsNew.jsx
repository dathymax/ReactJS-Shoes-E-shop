import React from 'react'
import fire from "../../assets/icon/Fire.png"

const ShoeTagIsNew = () => {
    return (
        <div className='shoe-tag__is-new'>
            <span>New</span>
            <img src={fire} alt="Fire" />
        </div>
    )
}

export default ShoeTagIsNew