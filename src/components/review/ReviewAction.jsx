import React from 'react'
import Rating from '../rating'
import { Button } from 'antd'

const ReviewAction = () => {
    return (
        <div className='product__review-action'>
            <p className='text-20-semi text-white'>Women Sweet Sweater</p>
            <p className='text-48-bold my-1 text-center text-white'>4.7</p>
            <Rating />
            <div className="h-1"></div>
            <p className="text-14 text-white text-center">Overall rating based on 198 reviews</p>
            <div className="h-3"></div>
            <p className='text-14 text-white text-center'><strong >398 </strong>products have been sold</p>
            <div className="h-1"></div>
            <Button block size='large' className='text-primary'>
                Write a review
            </Button>
        </div>
    )
}

export default ReviewAction