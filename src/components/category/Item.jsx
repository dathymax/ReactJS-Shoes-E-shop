import React from 'react'
import "./styles.scss"

const CategoryItem = ({ category = {} }) => {
    return (
        <div className='category'>
            <div>
                <p className='text-32'>{category.categoryName}</p>
                <p className='text-description'>{category.shoeCount} Products</p>
            </div>

            <img src={category.img} alt="Category Image" />
        </div>
    )
}

export default CategoryItem