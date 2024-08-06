import React, { useState } from 'react'
import Rating from '../rating'
import { Button, Modal } from 'antd'
import ReviewForm from './ReviewForm';

const ReviewAction = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='product__review-action'>
            <p className='text-20-semi text-white'>Women Sweet Sweater</p>
            <p className='text-48-bold my-4 text-center text-white'>4.7</p>
            <Rating />
            <div className="h-4"></div>
            <p className="text-14 text-white text-center">Overall rating based on 198 reviews</p>
            <div className="h-12"></div>
            <p className='text-14 text-white text-center'><strong >398 </strong>products have been sold</p>
            <div className="h-4"></div>
            <Button block size='large' className='text-primary' onClick={() => setOpen(true)}>
                Write a review
            </Button>

            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                title={"Write a Review"}
                destroyOnClose
                footer={null}
            >
                <ReviewForm />
            </Modal>
        </div>
    )
}

export default ReviewAction