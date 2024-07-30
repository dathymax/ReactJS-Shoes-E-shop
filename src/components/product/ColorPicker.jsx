import React, { useState } from 'react'

const colors = [
    { id: 1, color: "#DCD5C3", isSoldOut: true },
    { id: 2, color: "#A4A4A4", isSoldOut: false },
    { id: 3, color: "#EBC1BB", isSoldOut: false },
    { id: 4, color: "#F04438", isSoldOut: false },
    { id: 5, color: "#E7DDDC", isSoldOut: false },
]

const ProductColorPicker = () => {
    const [active, setActive] = useState(null);

    return (
        <div className='product__color-picker'>
            <p className='text-14-5f'>Color</p>

            <div className="picker__colors">
                {colors.map(color => {
                    return (
                        <div key={color.id} className={`picker__color-wrapper ${color.id === active ? "active" : ""}`}>
                            <div
                                style={{ backgroundColor: color.color }}
                                className={`picker__color cursor-pointer ${color.isSoldOut ? "disabled" : ""}`}
                                onClick={() => {
                                    if (!color.isSoldOut) {
                                        setActive(color.id);
                                    }
                                }}
                            ></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductColorPicker