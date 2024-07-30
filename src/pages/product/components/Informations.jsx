import { Divider } from 'antd'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductInformations = () => {
    return (
        <div className='product__informations'>
            <h2 className='text-36'>Nike Template</h2>
            <p className='text-24'>$ 400</p>
            <div className='flex items-center justify-between'>
                <p><strong>398 </strong>products have been sold</p>

                <div className="flex items-center gap-1">
                    <div className='flex items-center' style={{ gap: 5 }}><FaRegHeart /> Wishlist</div>
                    <div className='flex items-center' style={{ gap: 5 }}><IoShareSocialOutline /> Share</div>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default ProductInformations