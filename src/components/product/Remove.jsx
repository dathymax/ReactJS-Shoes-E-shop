import React from 'react'
import remove from "../../assets/actions/remove.png"

const ProductRemove = ({ isAll = true }) => {
    return (
        <div className='flex items-center flex-col'>
            <img src={remove} alt="Remove product" />

            <div className="text-center mb-6">
                <p className='text-20 font-bold'>Remove {isAll ? "all product" : "product"} from cart</p>
                <p className='text-14-bbb'>
                    {isAll ? "Are you sure you want to remove all the products from the cart?" : "Are you sure you want to remove the product from the cart?"}
                </p>
            </div>
        </div>
    )
}

export default ProductRemove