import React, { useState } from 'react'

const sizes = [
    { id: 1, size: 39, isSoldOut: false },
    { id: 2, size: 40, isSoldOut: false },
    { id: 3, size: 41, isSoldOut: true },
    { id: 4, size: 42, isSoldOut: true },
    { id: 5, size: 43, isSoldOut: false },
]

const ProductSizePicker = () => {
    const [active, setActive] = useState(1);

    return (
        <div className='product__size-picker'>
            <div className="flex items-center">
                <p className='text-14-5f'>Size</p>
                <p className='text-14 text-primary cursor-pointer'>Size guide</p>
            </div>

            <div className="picker__sizes">
                {sizes.map(size => {
                    return (
                        <div
                            key={size.id}
                            className={`picker__size cursor-pointer font-bold ${size.isSoldOut ? "disabled" : ""}`}
                            onClick={() => {
                                if (!size.isSoldOut) {
                                    setActive(size.id)
                                }
                            }}
                            style={{
                                borderColor: size.id === active ? "#000" : "#D1D1D1"
                            }}
                        >
                            {size.size}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSizePicker