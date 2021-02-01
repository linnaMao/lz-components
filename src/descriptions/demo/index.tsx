import * as React from 'react';
import Descriptions from "..";

import { TData, TEnum } from "../type";
const dataEnumArr:TEnum[] = [
  {
    key: 'name',
    name: '名字'
  },
  {
    key: 'age',
    name: '年龄'
  },
  {
    key: 'context',
    name: '联系方式',
    type: 'copy'
  },
  {
    key: 'url',
    name: '链接',
    type: 'url'
  },
]

const data:TData = {
  'name': 'mlz',
  'age': 18,
  'context': '123123213',
  'cardNumber': '33030201930222',
  'url': 'http://baidu.com'
}

const Index: React.FC = () => {
  return (
    <>
      <Descriptions    
        dataEnumArr={dataEnumArr}
        data={data}
        bordered={true}
      />
    </>
  )
}

export default Index