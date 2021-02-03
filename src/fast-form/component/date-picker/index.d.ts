import * as React from 'react';
import { IProps } from '../type';
interface IDatePickerProps extends IProps {
  type: string;
}
declare const DatePicker: React.FC<IDatePickerProps>;
export default DatePicker;
