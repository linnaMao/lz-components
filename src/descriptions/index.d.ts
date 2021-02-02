import * as React from 'react';
import { TData, TEnum } from './type';
interface IDescriptionsProps {
  data: TData;
  dataEnumArr: TEnum[];
  bordered?: boolean;
  span?: 1 | 2;
}
declare const Descriptions: React.FC<IDescriptionsProps>;
export default Descriptions;
