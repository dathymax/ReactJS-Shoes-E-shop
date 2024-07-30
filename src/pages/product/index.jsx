import React from 'react'
import "./styles.scss"
import ProductImages from './components/Images'
import ProductInformations from './components/Informations'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import { shoes } from '../home'
import { Divider } from 'antd'


const ProductPage = () => {
    return (
        <section className='container product'>
            <div className="product__details">
                <ProductImages />

                <ProductInformations />
            </div>

            <Divider />

            <Carousel slideTitle={"Best Selling"}>
                {shoes.map(shoe => {
                    return (
                        <ShoeCard key={shoe.id} shoe={shoe} />
                    )
                })}
            </Carousel>
        </section>
    )
}

export default ProductPage