import React, { useState } from 'react'
import cart from "../../../assets/icon/ShoppingCart.svg"
import { Button, Divider, Drawer, Modal } from 'antd';
import ProductInShortcutCart from '../../../components/product/InShortcutCart';
import { useNavigate } from 'react-router-dom';
import ProductRemove from '../../../components/product/Remove';
import { productCart } from '../../../data/data';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [openClear, setOpenClear] = useState(false);
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
                    <p className='text-16-semi text-red cursor-pointer' onClick={() => setOpenClear(true)}>Clear all</p>
                </div>
                <Divider />

                {productCart.map(product => {
                    return (
                        <ProductInShortcutCart key={product.id} product={product} />
                    )
                })}

                <div className='flex items-center justify-between text-20 font-bold mb-1'>
                    <p>Subtotal</p>

                    <p>$ 3,010.00</p>
                </div>

                <p className='text-14-1b'>Taxes and shipping fee will be calculated at checkout</p>
                <Divider />

                <div className="flex items-center gap-4">
                    <Button size="large" block onClick={() => handleRedirect("/cart")}>View cart</Button>
                    <Button size="large" type="primary" block onClick={() => handleRedirect("/checkout")}>Checkout</Button>
                </div>
            </Drawer>

            <Modal open={openClear} onCancel={() => setOpenClear(false)} destroyOnClose closeIcon={null} footer={null}>
                <ProductRemove />

                <div className="flex items-center gap-6">
                    <Button type="primary" size="large" block onClick={() => setOpenClear(false)}>Remove</Button>
                    <Button size="large" block onClick={() => setOpenClear(false)}>Cancel</Button>
                </div>
            </Modal>
        </div>
    )
}

export default Cart