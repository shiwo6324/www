import React from 'react';
import { Col, Form, Row, Select, Tooltip, Button } from 'antd';

const FormPage = () => {
  const [form] = Form.useForm();

  const handleFormAChange = (value: string) => {
    form.setFieldsValue({
      importExports: {
        includesNonSiemensVendorProducts: null,
        isBPReceivesPaymentFromIE: null,
      },
    });
  };

  const handleSubmit = (values: any) => {
    console.log('Collected values:', values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item 
            name={['importExports', 'isBPMakesPaymentToIE']} 
            label="BP Makes Payment to I/E?"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Select placeholder="请选择" onChange={handleFormAChange} style={{ width: '100%' }}>
              <Select.Option value="yes">是</Select.Option>
              <Select.Option value="no">否</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => 
            prevValues.importExports?.isBPMakesPaymentToIE !== currentValues.importExports?.isBPMakesPaymentToIE
          }
        >
          {({ getFieldValue }) =>
            getFieldValue(['importExports', 'isBPMakesPaymentToIE']) === 'yes' && (
              <>
                <Col span={8}>
                  <Form.Item 
                    name={['importExports', 'includesNonSiemensVendorProducts']}
                    label={
                      <Tooltip title="Products Purchased by BP from l/E includes ProductsSupplied by Non-SiemensVendor?">
                        <span>Products Purchased by BP from I/E includes...</span>
                      </Tooltip>
                    }
                    rules={[{ required: true, message: 'This field is required' }]}
                  >
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Select.Option value="yes">是</Select.Option>
                      <Select.Option value="no">否</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => 
                      prevValues.importExports?.includesNonSiemensVendorProducts !== currentValues.importExports?.includesNonSiemensVendorProducts
                    }
                  >
                    {({ getFieldValue }) => {
                      const includesNonSiemensVendorProducts = getFieldValue(['importExports', 'includesNonSiemensVendorProducts']);
                      return includesNonSiemensVendorProducts && (
                        <Form.Item label="model">
                          {includesNonSiemensVendorProducts === 'yes' ? 'model A' : 'model B'}
                        </Form.Item>
                      );
                    }}
                  </Form.Item>
                </Col>
              </>
            )
          }
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => 
            prevValues.importExports?.isBPMakesPaymentToIE !== currentValues.importExports?.isBPMakesPaymentToIE
          }
        >
          {({ getFieldValue }) =>
            getFieldValue(['importExports', 'isBPMakesPaymentToIE']) === 'no' && (
              <>
                <Col span={8}>
                  <Form.Item 
                    name={['importExports', 'isBPReceivesPaymentFromIE']} 
                    label="BP Receives Payment from I/E?"
                    rules={[{ required: true, message: 'This field is required' }]}
                  >
                    <Select placeholder="请选择" style={{ width: '100%' }}>
                      <Select.Option value="yes">是</Select.Option>
                      <Select.Option value="no">否</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => 
                      prevValues.importExports?.isBPReceivesPaymentFromIE !== currentValues.importExports?.isBPReceivesPaymentFromIE
                    }
                  >
                    {({ getFieldValue }) => {
                      const isBPReceivesPaymentFromIE = getFieldValue(['importExports', 'isBPReceivesPaymentFromIE']);
                      return isBPReceivesPaymentFromIE && (
                        <Form.Item label="model">
                          {isBPReceivesPaymentFromIE === 'yes' ? 'model C' : 'model D'}
                        </Form.Item>
                      );
                    }}
                  </Form.Item>
                </Col>
              </>
            )
          }
        </Form.Item>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormPage;
