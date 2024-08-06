import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

const ProfileForm = () => {
    return (
        <Form layout='vertical'>
            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item label="First name" name="First name">
                        <Input placeholder="First name" size="large" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="Last name" name="Last name">
                        <Input placeholder="Last name" size="large" />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item label="Address Label  (Optional)" name="addressLabel">
                <Input placeholder="Eg. home or office" size="large" />
            </Form.Item>

            <Form.Item label="Phone Number" name="Phone Number">
                <Input placeholder="Add your phone Number" size="large" />
            </Form.Item>

            <Form.Item label="Email" name="Email">
                <Input placeholder="Your Email" size="large" />
            </Form.Item>

            <Button size="large" type="primary" block>Save</Button>
        </Form>
    )
}

export default ProfileForm