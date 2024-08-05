import React, { useState } from 'react'
import cart from "../../../assets/icon/ShoppingCart.png"
import { Button, Divider, Drawer } from 'antd';
import ProductInShortcutCart from '../../../components/product/InShortcutCart';
import product1 from "../../../assets/shoes/in-cart/has-discount.png";
import product2 from "../../../assets/shoes/in-cart/no-discount.png";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const productCart = [
        { id: 1, img: product1, category: "Spring Collection", shoeName: "Nike Template", price: 400, quantity: 3, originalPrice: 900 },
        { id: 2, img: product2, category: "Spring Collection", shoeName: "Vans Ode", price: 400, quantity: 3 },
    ];
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        setOpen(false);
        navigate(path);
    }

    return (
        <div>
            <img src={cart} alt="Cart" className='cursor-pointer' onClick={() => setOpen(true)} />

            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                destroyOnClose
                title={""}
                width={440}
            >
                <div className="flex items-center justify-between">
                    <p className="text-20-semi">Your cart</p>
                    <p className='text-16-semi text-red cursor-pointer'>Clear all</p>
                </div>
                <Divider />

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
                    <Button size="large" type="primary" block onClick={() => handleRedirect("/checkout")}>Checkout</Button>
                </div>
            </Drawer>
        </div>
    )
}

export default Cart