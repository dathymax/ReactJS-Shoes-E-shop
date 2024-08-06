import { Button, Divider, Modal } from 'antd'
import React, { useState } from 'react'
import ProfileForm from './ProfileForm'
import AddressForm from './AddressForm'
import Remove from '../../../components/actions/Remove'

const ProfileInformation = () => {
    const [openEditAddress, setOpenEditAddress] = useState(false);
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const [openDeleteAddress, setOpenDeleteAddress] = useState(false);

    return (
        <>
            <div className="col-span-2 p-4 bg-white">
                <div className="flex items-center justify-between">
                    <p className="text-20 font-semi">Profile Details</p>

                    <Button type="primary" onClick={() => setOpenEditProfile(true)}>Edit</Button>
                </div>

                <Divider />

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>okbede</td>
                            <td>dumadoan@mail.com</td>
                            <td>+84853334530</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-span-2 p-4 bg-white">
                <div className="flex items-center justify-between">
                    <p className="text-20 font-semi">Address Details</p>

                    <Button type="primary" onClick={() => setOpenEditAddress(true)}>Add address</Button>
                </div>

                <Divider />

                <div>
                    <p className='text-16-a0 mb-2'>Home</p>
                    <p className="text-16">35 Đinh Cong Ha, Hoang Mai, Ha Noi, Viet Nam</p>

                    <div className="flex justify-end items-center gap-3">
                        <p className='cursor-pointer text-primary' onClick={() => setOpenEditAddress(true)}>Edit</p>
                        <p className='cursor-pointer text-red' onClick={() => setOpenDeleteAddress(true)}>Delete</p>
                    </div>
                </div>

                <Divider />

                <div>
                    <p className='text-16-a0 mb-2'>Office</p>
                    <p className="text-16">136 Giai Phong, Hai Ba Trung, Ha Noi,Viet Nam</p>

                    <div className="flex justify-end items-center gap-3">
                        <p className='cursor-pointer text-primary' onClick={() => setOpenEditAddress(true)}>Edit</p>
                        <p className='cursor-pointer text-red' onClick={() => setOpenDeleteAddress(true)}>Delete</p>
                    </div>
                </div>

                <Divider />
            </div>


            <Modal
                open={openEditAddress}
                footer={null}
                destroyOnClose
                title="Address"
                onCancel={() => setOpenEditAddress(false)}
            >
                <AddressForm />
            </Modal>

            <Modal
                open={openEditProfile}
                footer={null}
                destroyOnClose
                title="Profile"
                onCancel={() => setOpenEditProfile(false)}
            >
                <ProfileForm />
            </Modal>

            <Modal
                open={openDeleteAddress}
                footer={null}
                destroyOnClose
                title="Profile"
                onCancel={() => setOpenDeleteAddress(false)}
            >
                <Remove title='Remove Address' description='Are you sure you want to remove your Address?' />

                <div className="flex items-center justtify-center gap-4 mt-4">
                    <Button type='primary' size="large" block>Remove</Button>
                    <Button size="large" block>Cancel</Button>
                </div>
            </Modal>
        </>
    )
}

export default ProfileInformation