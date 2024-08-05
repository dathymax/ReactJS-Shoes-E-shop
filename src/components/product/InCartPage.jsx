import React, { useState } from 'react'
import note from "../../assets/icon/note.png"
import trash from "../../assets/icon/trash.png"
import { Button, Divider, Modal } from 'antd';
import ProductInfoInCartPage from './InfoInCartPage';
import ProductColorPicker from './ColorPicker';
import ProductSizePicker from './SizePicker';
import ProductRemove from './Remove';

const ProductInCartPage = ({ product = {} }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <ProductInfoInCartPage product={product} />

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setOpenEdit(true)}>
                    <img src={note} alt="Edit button" />
                    <p className='text-14 font-semi'>Edit</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setOpenDelete(true)}>
                    <img src={trash} alt="Remove button" />
                    <p className='text-14 font-semi text-red'>Remove</p>
                </div>
            </div>

            <Modal open={openEdit} onCancel={() => setOpenEdit(false)} destroyOnClose title={"Edit cart"} footer={null}>
                <ProductInfoInCartPage product={product} />
                <Divider />

                <div className="flex items-center justify-between">
                    <ProductColorPicker />

                    <ProductSizePicker />
                </div>

                <Divider />

                <Button type="primary" size="large" block onClick={() => setOpenEdit(false)}>Update cart</Button>
            </Modal>

            <Modal open={openDelete} onCancel={() => setOpenDelete(false)} destroyOnClose closeIcon={null} footer={null}>
                <ProductRemove isAll={false} />

                <div className="flex items-center gap-6">
                    <Button type="primary" size="large" block onClick={() => setOpenDelete(false)}>Remove</Button>
                    <Button size="large" block onClick={() => setOpenDelete(false)}>Cancel</Button>
                </div>
            </Modal>
        </div>
    )
}

export default ProductInCartPage