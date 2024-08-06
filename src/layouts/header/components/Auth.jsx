import { Dropdown, Form, Modal } from 'antd'
import React, { useState } from 'react'
import LoginForm from '../../../components/auth/Login';
import RegisterForm from '../../../components/auth/Register';
import user from "../../../assets/icon/user.svg"
import { useNavigate } from 'react-router-dom';

const AuthService = () => {
    const [open, setOpen] = useState(false);
    const [authType, setAuthType] = useState(1);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const menuItems = [
        { key: "profile", label: "Profile" },
        { type: "divider" },
        { key: "logout", label: "Logout", danger: true },
    ]

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
        if (authType === 1) {
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "/";
        }
    }

    const handleClickMenu = ({ key }) => {
        switch (key) {
            case "profile":
                navigate("/profile")
                break;
            case "logout":
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/";
                break;
            default:
                break;
        }
    }

    return (
        <div className='cursor-pointer'>
            {isLoggedIn
                ? <Dropdown
                    menu={{
                        items: menuItems,
                        onClick: handleClickMenu
                    }}
                    trigger={["click"]}
                    destroyPopupOnHide
                    placement='bottomRight'
                >
                    <img src={user} alt="User icon" />
                </Dropdown>
                : <span onClick={handleOpen}>Login</span>
            }

            <Modal
                open={open}
                onCancel={handleClose}
                footer={null}
                destroyOnClose
            >
                <Form
                    form={form}
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