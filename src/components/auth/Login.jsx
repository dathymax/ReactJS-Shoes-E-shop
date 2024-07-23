import React from 'react'
import logo from "../../assets/Logo-auth.png"
import "./styles.scss"
import { Button, Checkbox, Form, Input } from 'antd'

const LoginForm = () => {
    return (
        <div className='login'>
            <div className="login__logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className='login__heading'>
                <h3>Welcome back</h3>
                <p>Please enter your detail and find your look</p>
            </div>

            <Form.Item
                label={"Email"}
                name={"email"}
                rules={[{
                    type: "email", required: true, message: "Email is required!"
                }]}
            >
                <Input size="large" type='email' placeholder='Email Address' />
            </Form.Item>

            <Form.Item
                label={"Password"}
                name={"password"}
                rules={[{
                    required: true, message: "Password is required!"
                }]}
            >
                <Input.Password size="large" placeholder='Password' />
            </Form.Item>

            <div className="flex items-center justify-between">
                <Checkbox>
                    Remember
                </Checkbox>

                <p className='cursor-pointer'>Forgot password</p>
            </div>

            <div className="h-1"></div>

            <Button block type='primary' size='large' htmlType='submit'>Sign in</Button>
        </div>
    )
}

export default LoginForm