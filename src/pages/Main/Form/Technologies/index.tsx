import React from 'react';
import { Button, Col, Form, Row, Space } from 'antd';
import { InputForm, SelectForm, CheckboxForm } from 'components';
import { VOLUME_OPTIONS } from 'const/options';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const Technologies: React.FC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <SelectForm name="js" label="JS" options={VOLUME_OPTIONS} />
        </Col>
        <Col span={8}>
          <SelectForm name="ts" label="TS" options={VOLUME_OPTIONS} />
        </Col>

        <Col span={8}>
          <SelectForm name="react" label="React" options={VOLUME_OPTIONS} />
        </Col>
        <Col span={8}>
          <SelectForm name="hooks" label="Hooks" options={VOLUME_OPTIONS} />
        </Col>
        <Col span={8}>
          <SelectForm name="html" label="HTML" options={VOLUME_OPTIONS} />
        </Col>
        <Col span={8}>
          <SelectForm name="css" label="CSS" options={VOLUME_OPTIONS} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={4}>
          <InputForm name="task" label="Тех" />
        </Col>
        <Col span={4}>
          <InputForm name="max" label="из" />
        </Col>
      </Row>

      <Form.List name="default_technologies">
        {() => (
          <Row>
            <CheckboxForm name="ant">Antd</CheckboxForm>
            <CheckboxForm name="styled">Styled Components</CheckboxForm>
            <CheckboxForm name="jest">Jest</CheckboxForm>
            <CheckboxForm name="enzyme">Enzyme</CheckboxForm>
          </Row>
        )}
      </Form.List>

      <Form.List name="technologies">
        {(fields, { add, remove }) => (
          <>
            <Row>
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Добавить технологию
                </Button>
              </Form.Item>
            </Row>
            <Row gutter={16}>
              {fields.map(({ key, fieldKey, name, ...restField }) => (
                <Col span={6} key={key}>
                  <Space align="baseline">
                    <InputForm {...restField} fieldKey={fieldKey} name={name} />
                    <DeleteOutlined onClick={() => remove(name)} />
                  </Space>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Form.List>
    </>
  );
};

export default Technologies;
