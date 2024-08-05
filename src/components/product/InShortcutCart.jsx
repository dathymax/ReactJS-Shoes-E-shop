import React from 'react'

const ProductInShortcutCart = ({ product = {} }) => {
    return (
        <div className='mb-8 flex items-stretch' style={{ gap: 12 }}>
            <img src={product.img} alt="Product image" />

            <div className="flex-1 flex flex-col items-start justify-between">
                <div>
                    <p className='text-14-bbb'>{product.category}</p>
                    <p className='text-16-semi'>{product.shoeName}</p>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <p>x{product.quantity}</p>
                    <div className='flex' style={{ gap: 5 }}>
                        {product.originalPrice && <p className='text-16-bbb font-bold' style={{ textDecoration: "line-through" }}>${product.originalPrice}</p>}
                        <p className='text-16 font-bold'>${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInShortcutCart