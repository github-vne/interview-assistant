import React, { useEffect, useMemo } from 'react';
import { Form, FormItemProps } from 'antd';

const DefaultFormItem = Form.Item;

interface IFormItem extends FormItemProps {
  isRequired?: boolean;
}

const FormItem: React.FC<IFormItem> = ({ children, ...props }) => {
  return (
    <DefaultFormItem rules={props.required ? [{ required: true, message: 'Обязательное поле' }] : []} {...props}>
      {children}
    </DefaultFormItem>
  );
};

export default FormItem;
