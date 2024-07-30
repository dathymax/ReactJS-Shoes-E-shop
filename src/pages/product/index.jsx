import React from 'react'
import "./styles.scss"
import ProductImages from './components/Images'
import ProductInformations from './components/Informations'


const ProductPage = () => {
    return (
        <section className='container product'>
            <div className="product__details">
                <ProductImages />

                <ProductInformations />
            </div>
        </section>
    )
}

export default ProductPage