import * as React from 'react';
import classnames from 'classnames';
import HotCard from './components/card';
import styles from './index.less';

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
}

const HotList: React.FC<IHotListProps> = props => {
  const { data, className } = props;

  return (
    <div className={classnames(styles.hotListWrap, className)}>
      {data.map((item, index) => (
        <HotCard data={item} index={index + 1} />
      ))}
    </div>
  );
};

export default HotList;
