import React from 'react'
import "./styles.scss"

const ShoeCard = ({ shoe = {} }) => {
    return (
        <div className='shoe-card'>
            <img src={shoe.img} alt="Shoe image" />
            <p className='text-description'>{shoe.shoeName}</p>
            <p className='text-price'>${shoe.price}</p>
        </div>
    )
}

export default ShoeCard