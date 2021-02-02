import { Moment } from 'moment';
export interface IProps {
  value?: string | Moment;
  onChange?: (value: string) => void;
}
