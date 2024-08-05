import React from 'react'

const ProductInfoInCartPage = ({ product = {} }) => {
    return (
        <div className='flex items-stretch' style={{ gap: 12 }}>
            <img src={product.img} alt="Product image" />

            <div className="flex-1 flex flex-col items-start justify-between">
                <div>
                    <p className='text-14-bbb'>{product.category}</p>
                    <p className='text-16-semi'>{product.shoeName}</p>
                </div>

                <div className='flex items-center gap-3'>
                    <p className='text-14'>{product.size}</p>
                    <p>|</p>
                    <div className='flex gap-2'>
                        <p className='text-14 font-semi'>{product.colorName}</p>
                        <div style={{ width: 20, height: 20, backgroundColor: product.colorHex, borderRadius: 5 }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoInCartPage