import React, { useEffect } from 'react'
import "./styles.scss"
import ProductImages from './components/Images'
import ProductInformations from './components/Informations'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import { shoes } from '../home'
import { Divider } from 'antd'
import Tabs from '../../components/tabs'
import ProductReviews from './components/Reviews'
import ProductShippingAndReturns from './components/ShippingAndReturns'

const ProductPage = () => {
    const productTabs = [
        {
            key: "reviews",
            label: "Customer Reviews",
            children: <ProductReviews />
        },
        {
            key: "shipping&returns",
            label: "Shipping & Returns",
            children: <ProductShippingAndReturns />
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='container product'>
            <div className="product__details">
                <ProductImages />

                <ProductInformations />
            </div>

            <div className="h-4"></div>

            <Tabs items={productTabs} />

            <Divider />

            <Carousel slideTitle={"Recently Viewed"}>
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