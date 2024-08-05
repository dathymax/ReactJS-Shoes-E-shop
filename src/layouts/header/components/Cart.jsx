import React, { useState } from 'react'
import cart from "../../../assets/icon/ShoppingCart.png"
import { Divider, Drawer } from 'antd';
import ProductInShortcutCart from '../../../components/product/InShortcutCart';

const Cart = () => {
    const [open, setOpen] = useState(false);

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

                <ProductInShortcutCart />
                <ProductInShortcutCart />

                <Divider />
            </Drawer>
        </div>
    )
}

export default Cart