import React, { useState } from 'react'
import { shoes } from '../../data/data'
import ListProduct from '../../components/product/List'
import { Button, Modal } from 'antd'
import ProductRemove from '../../components/product/Remove'
import Empty from '../../components/cart/Empty'

const WishListPage = () => {
    const [openClear, setOpenClear] = useState(false);

    return (
        <section className='container content'>
            <div className="flex items-center justify-between mb-10">
                <h1 className='text-36 font-bold'>My Wishlist</h1>

                {shoes.length > 0 && <p className='text-14 text-red font-semi cursor-pointer' onClick={() => setOpenClear(true)}>Remove all</p>}
            </div>

            {shoes.length > 0 ? <ListProduct listCol={4} /> : <Empty title='Empty Wishlist' description="You don't have any products in your wishlist." />}

            <Modal open={openClear} onCancel={() => setOpenClear(false)} destroyOnClose closeIcon={null} footer={null}>
                <ProductRemove />

                <div className="flex items-center gap-6">
                    <Button type="primary" size="large" block onClick={() => setOpenClear(false)}>Remove</Button>
                    <Button size="large" block onClick={() => setOpenClear(false)}>Cancel</Button>
                </div>
            </Modal>
        </section>
    )
}

export default WishListPage