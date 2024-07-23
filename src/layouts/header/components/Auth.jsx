import { Form, Modal } from 'antd'
import React, { useState } from 'react'
import LoginForm from '../../../components/auth/Login';
import RegisterForm from '../../../components/auth/Register';

const AuthService = () => {
    const [open, setOpen] = useState(false);
    const [authType, setAuthType] = useState(1);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSetAuthType = (type) => {
        setAuthType(type);
    }

    const handleRenderAuthForm = (authType) => {
        switch (authType) {
            case 1:
                return <LoginForm />
            case 2:
                return <RegisterForm />
            default:
                return <></>
        }
    }

    const handleRenderSwitchAuthType = (authType) => {
        switch (authType) {
            case 1:
                return <p className='text-center'>
                    Don't have account yet? {" "}
                    <span
                        className='text-primary cursor-pointer'
                        onClick={() => handleSetAuthType(2)}
                    >
                        Register here
                    </span>
                </p>
            case 2:
                return <p className='text-center'>
                    You already have account? {" "}
                    <span
                        className='text-primary cursor-pointer'
                        onClick={() => handleSetAuthType(1)}
                    >
                        Login here
                    </span>
                </p>
            default:
                return <></>
        }
    }

    const onFinish = (values) => {
        console.log("jtadd", values)
    }

    return (
        <div className='cursor-pointer'>
            <span onClick={handleOpen}>Login</span>

            <Modal
                open={open}
                onCancel={handleClose}
                footer={null}
                destroyOnClose
            >
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                >
                    {handleRenderAuthForm(authType)}
                </Form>

                {handleRenderSwitchAuthType(authType)}
            </Modal>
        </div>
    )
}

export default AuthService