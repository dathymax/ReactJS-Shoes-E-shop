import React from 'react'
import { useAppContext } from '../../contexts/app';

const ProductCounter = ({ productQuantity = 5 }) => {
    const { productCartQuantity, setProductCartQuantity } = useAppContext();

    const handleIncrease = (productQuantity) => {
        setProductCartQuantity(prev => {
            if (prev < productQuantity) {
                return prev + 1
            } else {
                return prev
            }
        });
    }

    const handleDecrease = () => {
        setProductCartQuantity(prev => {
            if (prev > 0) {
                return prev - 1
            } else {
                return 0
            }
        });
    }

    return (
        <div className='product__counter'>
            <p
                onClick={handleDecrease}
                className={`cursor-pointer ${productCartQuantity === 0 ? "disable" : ""} `}
            >
                -
            </p>

            <input type="text" value={productCartQuantity} onChange={(e) => setProductCartQuantity(Number(e.target.value))} />

            <p
                onClick={() => handleIncrease(productQuantity)}
                className={`cursor-pointer ${productCartQuantity === productQuantity ? "disable" : ""}`}
            >
                +
            </p>
        </div>
    )
}

export default ProductCounter