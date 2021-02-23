import * as React from 'react';
import {
  DatePicker as AntdDatePicker,
  TimePicker as AntdTimePicker,
  TimePicker,
} from 'antd';
import { IProps } from '../type';
import moment from 'moment';

const { RangePicker } = AntdDatePicker;

interface IDatePickerProps extends IProps {
  type: string;
}

const WAY_YM = 'YYYY-MM';
const WAY_YMD = 'YYYY-MM-DD';
const WAY_YMDHMS = 'YYYY-MM-DD HH:mm:ss';

const DatePicker: React.FC<IDatePickerProps> = props => {
  const { type, value, onChange } = props;

  const handleChange = (e: any, way: string) => {
    onChange?.(e.format(way));
  };

  const renderDate = () => {
    switch (type) {
      case 'datePicker':
        return (
          <AntdDatePicker
            style={{ width: '100%' }}
            value={moment(value)}
            onChange={e => handleChange(e, WAY_YMD)}
          />
        );
      case 'dateTimePicker':
        return (
          <AntdDatePicker
            showTime
            format={WAY_YMDHMS}
            style={{ width: '100%' }}
            value={moment(value)}
            onChange={e => handleChange(e, WAY_YMDHMS)}
          />
        );
      case 'monthPicker':
        return (
          <AntdDatePicker
            picker="month"
            style={{ width: '100%' }}
            value={moment(value)}
            onChange={e => handleChange(e, WAY_YM)}
          />
        );
      case 'rangePicker':
        return <RangePicker style={{ width: '100%' }} />;
      case 'rangeTimePicker':
        return (
          <RangePicker showTime format={WAY_YMDHMS} style={{ width: '100%' }} />
        );
      case 'timePicker':
        return <TimePicker style={{ width: '100%' }} />;
      default:
        return <AntdDatePicker style={{ width: '100%' }} />;
    }
  };

  return <>{renderDate()}</>;
};

export default DatePicker;
