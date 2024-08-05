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
import product1 from "../../assets/shoes/in-cart/has-discount.png";
import product2 from "../../assets/shoes/in-cart/no-discount.png";
import ProductInShortcutCart from "../../components/product/InShortcutCart";
import { useNavigate } from 'react-router-dom';

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
    const productCart = [
        { id: 1, img: product1, category: "Spring Collection", shoeName: "Nike Template", price: 400, quantity: 3, originalPrice: 900 },
        { id: 2, img: product2, category: "Spring Collection", shoeName: "Vans Ode", price: 400, quantity: 3 },
    ];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleRedirect = (path) => {
        setOpen(false);
        navigate(path);
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
                {productCart.map(product => {
                    return (
                        <ProductInShortcutCart product={product} />
                    )
                })}

                <div className='flex items-center justify-between text-20 font-bold mb-1'>
                    <p>Subtotal</p>

                    <p>$ 3,010.00</p>
                </div>

                <p className='text-14-1b'>Taxes and shipping fee will be calculated at checkout</p>
                <Divider />

                <div className="flex items-center gap-1">
                    <Button size="large" block onClick={() => handleRedirect("/cart")}>View cart</Button>
                    <Button size="large" type='primary' block onClick={() => handleRedirect("/checkout")}>Checkout</Button>
                </div>
            </Modal>
        </section>
    )
}

export default ProductPage