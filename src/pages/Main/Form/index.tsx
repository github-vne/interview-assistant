import React, { useEffect } from 'react';
import { Button, Select, Col, DatePicker, Form, Input, Row, Space, Checkbox, Progress, Tabs } from 'antd';
import moment from 'moment';
import { DateForm, InputForm, SelectForm, TimePickerForm, Wrapper } from 'components';
import { VOLUME_OPTIONS } from 'const/options';
import Common from './Common';
import Technologies from './Technologies';
import { useMain } from '../context';

const { TabPane } = Tabs;

const MainForm: React.FC = () => {
  const { onSubmitForm } = useMain();

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onSubmitForm} onFinishFailed={onFinishFailed}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Общая информация" key="1" forceRender>
            <Common />
          </TabPane>
          <TabPane tab="Технические навыки" key="3" forceRender>
            <Technologies />
          </TabPane>
        </Tabs>

        <Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default MainForm;
