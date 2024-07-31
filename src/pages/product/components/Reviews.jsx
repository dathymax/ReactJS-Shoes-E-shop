import React from 'react'
import ReviewAction from '../../../components/review/ReviewAction'
import Reviewed from '../../../components/review/Reviewed'

const ProductReviews = () => {
    const reviews = [
        {
            id: 1,
            title: "Love the Sweater",
            content: "I really love how it looks, and it is indeed have a good quality fabric. I am ready to create color coordinated look with this sweater",
            stars: 3,
            author: "Yahyo Prayogo",
            date: "05/04/22"
        },
        {
            id: 2,
            title: "Great Product!",
            content: "The delivery is really fast and the product that arrived at my door is the same quality as they stated in the website. Great!",
            stars: 5,
            author: "Erik Satur",
            date: "05/04/22"
        },
        {
            id: 3,
            title: "The color is super pretty",
            content: "I do love their soft pastel color selection. It is really pretty when I use it under my winter coat. Definitely will purchase again.",
            stars: 4,
            author: "Apenk Juliawan",
            date: "05/04/22"
        },
    ]

    return (
        <div className='product__reviews'>
            <ReviewAction />

            {reviews.map(review => {
                return (
                    <Reviewed key={review.id} review={review} />
                )
            })}
        </div>
    )
}

export default ProductReviews