import * as React from 'react';
import { Descriptions as AntdDescription, Typography } from 'antd'
import { TData, TEnum } from "./type";


const { Item } = AntdDescription;
const { Paragraph } = Typography;

interface IDescriptionsProps {
  data: TData,
  dataEnumArr: TEnum[]
  bordered?: boolean,
  span?: 1 | 2,
}


const Descriptions: React.FC<IDescriptionsProps> = (props) => {

  const { data, dataEnumArr, bordered, span } = props

  const renderItem = (item: TEnum) => {
    const ke = item.key
    const tp = item.type
    const da = data[ke]
    switch (tp) {
      case 'copy':
        return <Paragraph copyable style={{ marginBottom: 0 }}>{da}</Paragraph>
      case 'url':
        return <a href={da}>查看{ke}</a>
      default: return data[ke]
    }
  }

  return (
    <>
      <AntdDescription
        bordered={bordered}
        size="middle"
        column={2}
      >
        {
          dataEnumArr.map((item: any) => (
            <Item
              key={item.key}
              label={item.name}
              span={span}
            >
              {renderItem(item)}
            </Item>
          ))
        }
      </AntdDescription>
    </>
  )
}

export default Descriptions
