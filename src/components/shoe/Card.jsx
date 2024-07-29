import React from 'react'
import "./styles.scss"
import ShoeTagIsNew from './IsNew'
import ShoeTagIsFavorite from './IsFavorite'
import IsSoldOut from './IsSoldOut'

const ShoeCard = ({ shoe = {} }) => {
    return (
        <div className='shoe-card cursor-pointer'>
            <img src={shoe.img} alt="Shoe image" />
            <p className='text-description'>{shoe.shoeName}</p>
            <p className='text-price'>${shoe.price}</p>

            <div className="shoe-card__tags">
                <div>
                    {shoe.isNew && <ShoeTagIsNew />}

                    {shoe.isSoldOut && <IsSoldOut />}
                </div>

                <ShoeTagIsFavorite isFav={shoe.isFavorite} />
            </div>
        </div>
    )
}

export default ShoeCard