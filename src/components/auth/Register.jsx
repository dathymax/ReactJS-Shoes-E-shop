import React from 'react'
import "./styles.scss"
import { Button, Form, Input } from 'antd'

const RegisterForm = () => {
    return (
        <div className='register'>
            <div className='login__heading'>
                <h3>Create an Account</h3>
                <p>Register for faster checkout, track your order's status, and more</p>
            </div>

            <Form.Item
                label={"First Name"}
                name={"firstName"}
                rules={[{
                    required: true, message: "First name is required!"
                }]}
            >
                <Input size="large" placeholder='First name' />
            </Form.Item>

            <Form.Item
                label={"Last Name"}
                name={"lastName"}
                rules={[{
                    required: true, message: "Last name is required!"
                }]}
            >
                <Input size="large" placeholder='Last name' />
            </Form.Item>

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

            <div className="h-4"></div>

            <Button block type='primary' size='large' htmlType='submit'>Register</Button>
        </div>
    )
}

export default RegisterForm