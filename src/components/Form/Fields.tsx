import React from 'react';

import { Select, Input, Checkbox, DatePicker, Form, TimePicker } from 'antd';
import { IInputForm, ISelectForm, IDateForm, ICheckboxForm } from './types';
import FormItem from './FormItem';

export const SelectForm: React.FC<ISelectForm> = ({ required, name, label, initialValue, ...props }) => (
  <FormItem required={required} name={name} label={label} initialValue={initialValue}>
    <Select {...props} allowClear />
  </FormItem>
);

export const InputForm: React.FC<IInputForm> = ({ required, name, label, fieldKey, initialValue, ...props }) => (
  <FormItem required={required} name={name} label={label} initialValue={initialValue} fieldKey={fieldKey}>
    <Input {...props} autoComplete="off" />
  </FormItem>
);

export const CheckboxForm: React.FC<ICheckboxForm> = ({ required, name, label, initialValue, children, ...props }) => (
  <FormItem required={required} name={name} label={label} initialValue={initialValue} valuePropName="checked">
    <Checkbox {...props}>{children}</Checkbox>
  </FormItem>
);

export const DateForm: React.FC<IDateForm> = ({ required, name, label, initialValue, ...props }) => (
  <FormItem required={required} name={name} label={label} initialValue={initialValue}>
    <DatePicker style={{ width: '100%' }} format="DD.MM.YYYY" {...props} />
  </FormItem>
);

export const TimePickerForm: React.FC<IDateForm> = ({ required, name, label, initialValue, ...props }) => (
  <FormItem required={required} name={name} label={label} initialValue={initialValue}>
    <TimePicker style={{ width: '100%' }} format="HH:mm" {...props} />
  </FormItem>
);

/*
export const RadioForm: React.FC<IRadioGroupForm> = ({ options, direction, onChange, defaultValue, ...props }) => (
  <FormItem {...props}>
    <RadioGroup onChange={onChange} options={options} defaultValue={defaultValue} direction={direction} />
  </FormItem>
);

export const TextareaForm: React.FC<ITextareaForm> = ({ placeholder, disabled, rows, resize, ...props }) => (
  <FormItem {...props}>
    <Textarea
      rows={rows}
      $resize={resize}
      placeholder={placeholder || 'Введите значение'}
      disabled={disabled}
      autoComplete="off"
    />
  </FormItem>
);

export const DateRangeForm: React.FC<IDateRangeForm> = ({ rangePickerProps, ...props }) => (
  <FormItem {...props}>
    <DateRangePicker {...rangePickerProps} />
  </FormItem>
);

export const UploadForm: React.FC<IUploadForm> = ({ action, customRequest, ...props }) => (
  <FormItem valuePropName="fileList" {...props}>
    <UploadButton name="document" action={action} customRequest={customRequest} />
  </FormItem>
);
*/
