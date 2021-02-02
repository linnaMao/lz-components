import * as React from 'react';
import Descriptions from '..';

import { TData, TEnum } from '../type';

const dataEnumArr: TEnum[] = [
  {
    key: 'name',
    name: '名字',
  },
  {
    key: 'age',
    name: '年龄',
  },
  {
    key: 'context',
    name: '联系方式',
    type: 'copy',
  },
  {
    key: 'url',
    name: '链接',
    type: 'url',
  },
  {
    key: 'interest',
    name: '兴趣',
    type: 'more',
  },
];

const data: TData = {
  name: 'mlz',
  age: 18,
  context: '123123213',
  cardNumber: '33030201930222',
  url: 'http://baidu.com',
  interest:
    '头痛（headache） 是临床常见的症状，通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。头痛病因繁多，神经痛、颅内感染、颅内占位病变、脑血管疾病、颅外头面部疾病、以及全身疾病如急性感染、中毒等均可导致头痛。发病年龄常见于青年、中年和老年。',
};

const Index: React.FC = () => {
  return (
    <>
      <Descriptions dataEnumArr={dataEnumArr} data={data} bordered={true} />
    </>
  );
};

export default Index;
