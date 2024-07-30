import React from 'react'
import bigImage from "../../../assets/product-detail/big-image.png"
import smallImage1 from "../../../assets/product-detail/small-image-1.png"
import smallImage2 from "../../../assets/product-detail/small-image-2.png"
import smallImage3 from "../../../assets/product-detail/small-image-3.png"
import smallImage4 from "../../../assets/product-detail/small-image-4.png"

const ProductImages = () => {
    return (
        <div className='product__images'>
            <img src={bigImage} alt="Big image" />

            <div className='product__images-small'>
                <img src={smallImage1} alt="Small image 1" />
                <img src={smallImage2} alt="Small image 2" />
                <img src={smallImage3} alt="Small image 3" />
                <img src={smallImage4} alt="Small image 4" />
            </div>
        </div>
    )
}

export default ProductImages