import * as React from 'react';
import classnames from 'classnames';
import HotCard from './components/card';
import styles from './index.less';
import { Content } from 'antd/lib/layout/layout';

export type THotItem = {
  id: string;
  image: string;
  title: string;
  video: string;
  mediaCount: number;
  hotNum: number;
  [propsName: string]: any;
};

interface IHotListProps {
  data: THotItem[];
  className?: any;
  content?: boolean;
  contentFooter?: boolean;
  number?: boolean;
}

const HotList: React.FC<IHotListProps> = props => {
  const { data, className, content, contentFooter, number } = props;

  return (
    <div className={classnames(styles.hotListWrap, className)}>
      {data.map((item, index) => {
        const params = {
          data: item,
          index: number ? index + 1 : 0,
          content,
          contentFooter,
        };
        return <HotCard {...params} />;
      })}
    </div>
  );
};

export default HotList;
