import { FormItemProps } from 'antd/lib/form';
import { InputProps, TextAreaProps } from 'antd/lib/input';
import { SelectProps } from 'antd/lib/select';
import { CheckboxProps } from 'antd/lib/checkbox';
import { PickerDateProps } from 'antd/lib/date-picker/generatePicker';
import { TimeRangePickerProps } from 'antd';

type IFormItem<T> = FormItemProps & T;

export type IInputForm = IFormItem<Omit<InputProps, 'name'>>;
export type ITextareaForm = IFormItem<TextAreaProps>;
export type ICheckboxForm = IFormItem<CheckboxProps>;
export type ITimePickerForm = IFormItem<TimeRangePickerProps>;
export type ISelectForm<T = any> = IFormItem<SelectProps<T>>;
export type IDateForm = IFormItem<PickerDateProps<any>>;
