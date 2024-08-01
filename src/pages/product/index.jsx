import React, { useEffect, useState } from 'react'
import "./styles.scss"
import ProductImages from './components/Images'
import ProductInformations from './components/Informations'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import { shoes } from '../home'
import { Button, Divider, Modal } from 'antd'
import Tabs from '../../components/tabs'
import ProductReviews from './components/Reviews'
import ProductShippingAndReturns from './components/ShippingAndReturns'
import tickSuccess from "../../assets/icon/tick-circle-success.png"
import productCart from "../../assets/cart/product.png"

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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <section className='container product'>
            <div className="product__details">
                <ProductImages />

                <ProductInformations handleOpen={handleOpen} />
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

            <Modal
                open={open}
                destroyOnClose
                onCancel={handleClose}
                footer={null}
                title={<div className='flex items-center' style={{ gap: 5 }}>
                    <img src={tickSuccess} alt="Tick icon" />
                    <p className='text-20-bold'>Added to cart</p>
                </div>}
                bodyProps={{
                    style: {
                        padding: "20px 0"
                    }
                }}
            >
                <div className="flex items-center gap-1">
                    <img src={productCart} alt="Product image" />
                </div>

                <div className="h-2"></div>

                <div className="flex items-center gap-1">
                    <Button size="large" block>View cart</Button>
                    <Button size="large" type='primary' block>Checkout</Button>
                </div>
            </Modal>
        </section>
    )
}

export default ProductPage