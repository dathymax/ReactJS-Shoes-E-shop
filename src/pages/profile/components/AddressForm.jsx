import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

const AddressForm = () => {
    return (
        <Form layout='vertical'>
            <Form.Item label="Address Label  (Optional)" name="addressLabel">
                <Input placeholder="Eg. home or office" size="large" />
            </Form.Item>

            <Form.Item label="Country" name="Country">
                <Input placeholder="Add your country" size="large" />
            </Form.Item>

            <Form.Item label="Address" name="Address">
                <Input placeholder="Your address" size="large" />
            </Form.Item>

            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item label="Province" name="Province">
                        <Input placeholder="Province" size="large" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="City" name="City">
                        <Input placeholder="City" size="large" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="District" name="District">
                        <Input placeholder="District" size="large" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item label="Postal code" name="Postal code">
                        <Input placeholder="Postal code" size="large" />
                    </Form.Item>
                </Col>
            </Row>

            <Button size="large" type="primary" block>Save</Button>
        </Form>
    )
}

export default AddressForm