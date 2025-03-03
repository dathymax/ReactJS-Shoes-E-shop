import { Button, Divider } from 'antd'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import ProductColorPicker from '../../../components/product/ColorPicker';
import ProductSizePicker from '../../../components/product/SizePicker';
import { CiZoomIn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import ProductCounter from '../../../components/product/Counter';

const ProductInformations = ({ handleOpen = () => { } }) => {
    return (
        <div className='product__informations'>
            <h2 className='text-36'>Nike Template</h2>
            <p className='text-24'>$ 400</p>
            <div className='flex items-center justify-between'>
                <p><strong>398 </strong><strong className='text-14-5f'>products have been sold</strong></p>

                <div className="flex items-center gap-4">
                    <div className='flex items-center' style={{ gap: 5 }}><FaRegHeart /> Wishlist</div>
                    <div className='flex items-center' style={{ gap: 5 }}><IoShareSocialOutline /> Share</div>
                </div>
            </div>
            <Divider />

            <div className="flex items-center justify-between">
                <ProductColorPicker />
                <ProductSizePicker />
            </div>

            <div className="flex items-center gap-4 my-4">
                <ProductCounter />
                <Button size="large" className='flex items-center' style={{ width: 160 }}>
                    <CiZoomIn />
                    Preview
                </Button>
                <Button
                    type="primary"
                    size="large"
                    className='flex items-center'
                    style={{ width: 205 }}
                    onClick={handleOpen}
                >
                    <IoCartOutline />
                    Add to cart
                </Button>
            </div>

            <Divider />

            <p className='text-16 font-bold mb-1'>Description</p>
            <p className='text-14-5f leading-1' style={{ lineHeight: "20px" }}>
                The Nike Air Force 1 is a blank canvas. It is the perfect canvas to express your personal style. Whether you want to dress it up with a suit or dress it down with jeans, the Air Force 1 is always a good choice.
                <br />
                <br />
                The Air Force 1 is a timeless classic. It will never go out of style. It is a shoe that you can pass down to your children and grandchildren.
            </p>
        </div>
    )
}

export default ProductInformations