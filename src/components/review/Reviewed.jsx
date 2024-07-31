import React from 'react'
import Rating from '../rating'

const Reviewed = ({ review = {} }) => {
    return (
        <div className='product__reviewed'>
            <p className='text-20-semi'>{review.title}</p>
            <p className='text-14-8d flex-1'>{review.content}</p>

            <Rating rated={review.stars} readOnly />

            <div className="flex items-center justify-between">
                <p className='text-12'>{review.author}</p>
                <p className='text-12'>{review.date}</p>
            </div>
        </div>
    )
}

export default Reviewed